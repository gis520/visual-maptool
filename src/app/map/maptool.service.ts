/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-10-15 15:13:04
 * @description:
 */

import { Injectable } from '@angular/core';
import { Driving, Marker } from 'ngx-amap/types/class';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DEFAULT_MARKER_ICON, SELECTED_MARKER_ICON } from './map-config';
import { ILngLat } from 'ngx-amap';

declare var AMap;

@Injectable()
export class MapToolService {
  private _map: any;
  private driving: Driving;

  get map(): any {
    return this._map;
  }
  constructor(private toastrSrv: ToastrService) {}

  setMap(map: any) {
    map.setMapStyle('amap://styles/macaron');
    this._map = map;
    this.initDrivingPlugin();
  }

  initDrivingPlugin() {
    AMap.plugin(['AMap.Driving'], () => {
      const driving = new AMap.Driving({
        map: this.map,
        policy: AMap.DrivingPolicy.LEAST_DISTANCE,
        size: 1,
        panel: 'driving-panel',
        isOutline: true,
        autoFitView: true
      });
      this.driving = driving;
    });
  }

  /**
   * 获取绘制区域内的 marker 点
   * @param e draw event obj
   */
  getInRingMarkers(e) {
    let overlayPath = []; //覆盖物路径
    let inRingMarkers = [];
    const bounds = e.obj.getBounds();
    //可以判断点是否在多边形、矩形、圆内
    //console.log(e.obj.contains(point))
    if (e.obj.CLASS_NAME === 'AMap.Marker') {
      overlayPath.push(e.obj.getPosition());
    } else {
      let southWest = bounds.getSouthWest();
      let northEast = bounds.getNorthEast();
      if (southWest.equals(northEast)) {
        return inRingMarkers;
      }
      overlayPath = e.obj.getPath();
    }
    const allMarkers = this.getAllMarkers();
    allMarkers.forEach(marker => {
      const point = marker.getPosition();
      //bounds.contains(point);
      const isPointInRing = AMap.GeometryUtil.isPointInRing(point, overlayPath);
      if (isPointInRing) {
        // marker.on('mouseover', this.showLabel);
        // marker.on('mouseout', this.hideLabel);
        this.changeIcon2Selected(marker);
        (marker as any).selected = true;
        inRingMarkers.push(marker);
      }
    });
    return inRingMarkers;
  }

  /**
   * 路径规划渲染
   */
  drivingRender(): Observable<any> {
    this.clearDriving();

    return Observable.create(observer => {
      // 根据起终点经纬度规划驾车导航路线
      const selectedMarkers = this.getSelectedMarkers();
      if (selectedMarkers.length === 0) {
        this.toastrSrv.warning('没有选择点，无法进行路径规划分析', '提示');
        return observer.complete();
      }
      const max = this.getMaxDistanceMarker();
      if (!max) {
        this.toastrSrv.error('获取最远点失败，无法进行路径规划分析', '提示');
        return observer.complete();
      }
      const endpoint = max.getPosition();
      const wayMarkers = selectedMarkers.filter(
        m => m.getExtData().id !== max.getExtData().id
      );
      const waypoints = wayMarkers.map(m => m.getPosition());

      this.driving.search(
        this.getWareHousePoint().getPosition(),
        endpoint,
        {
          waypoints
        },
        (status, result) => {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考
          // https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          if (status === 'complete') {
            this.toastrSrv.success('绘制驾车路线完成', '提示');
          } else if (result === 'USERKEY_PLAT_NOMATCH') {
            this.toastrSrv.error('地图服务失败，请联系管理员', '错误');
          } else {
            this.toastrSrv.error('获取驾车数据失败，请联系管理员', '错误');
          }
        }
      );
      // this.map.setFitView();
      this.clearSelectMarkersStyle();
      observer.next();
      observer.complete();
    });
  }

  setFitView() {
    this.map.setFitView();
  }
  /**
   *
   * @param marker
   * @param image 图标地址
   */
  changeMarkerIcon(marker: Marker, image: string) {
    marker.setIcon(
      new AMap.Icon({
        size: { width: 25, height: 34 },
        imageSize: { width: 25, height: 34 },
        image: image
      })
    );
  }

  changeIcon2Selected(marker) {
    if (this.isWareHouse(marker)) {
      return;
    }
    this.changeMarkerIcon(marker, SELECTED_MARKER_ICON);
  }

  changeIcon2Default(marker) {
    if (this.isWareHouse(marker)) {
      return;
    }
    this.changeMarkerIcon(marker, DEFAULT_MARKER_ICON);
  }

  /**
   * 清楚单个 marker 高亮样式
   * @param marker
   */
  clearMarkerStyle(marker) {
    if (this.isWareHouse(marker)) {
      return;
    }
    delete marker.selected;
    this.changeIcon2Default(marker);
  }

  /**
   * 清楚所有 markers 高亮样式
   */
  clearSelectMarkersStyle() {
    const allMarkers = this.getAllMarkers();
    if (allMarkers.length) {
      allMarkers.forEach(m => this.clearMarkerStyle(m));
    }
  }

  /**
   * 清除路径
   */
  clearDriving() {
    if (this.driving && this.driving.clear) {
      this.driving.clear();
    }
  }

  getAllMarkers(): Array<Marker> {
    return this.map.getAllOverlays('marker') || [];
  }

  getSelectedMarkers(): Array<Marker> {
    const result = this.getAllMarkers().filter((m: any) => {
      if (!this.isWareHouse(m) && m.selected) {
        return m;
      }
    });
    return result;
  }

  isWareHouse(marker: Marker): boolean {
    return marker.getExtData().isWareHouse;
  }

  /**
   * 获取直营点
   */
  getWareHousePoint() {
    const result = this.getAllMarkers().filter(m => {
      if (this.isWareHouse(m)) {
        return m;
      }
    });
    return result[0];
  }

  /**
   * 离直营点最远的marker点就是终点
   */
  getMaxDistanceMarker() {
    const markers = this.getSelectedMarkers();
    const res: Array<number> = markers.map(m => {
      const extData = m.getExtData();
      return isNaN(+extData.distanceToWarehouse)
        ? 0
        : +extData.distanceToWarehouse;
    });
    const maxDistance = Math.max(...res);
    return markers.filter(
      m => Number(m.getExtData().distanceToWarehouse) === maxDistance
    )[0];
  }

  showLabel(marker: Marker) {
    if (!marker) {
      return;
    }
    marker.setLabel({
      content: "<div class='info'>" + marker.getExtData().name + '</div>',
      offset: new AMap.Pixel(20, -10)
    });
  }

  hideLabel(marker: Marker) {
    if (!marker) {
      return;
    }
    marker.setLabel({});
  }

  clearMap() {
    this.map.clearMap();
  }
  /**
   * 平移到指定marker点
   * @param lnglat
   */
  panTo(lnglat: ILngLat) {
    this.map.panTo(lnglat);
  }
}
