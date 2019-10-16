import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AmapMouseToolService,
  AmapMouseToolWrapper,
  NgxAmapComponent
} from 'ngx-amap';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { MapToolService } from './maptool.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  drawType = '';
  maxHight = '700px';
  centerPoint = [116.397428, 39.90923];
  warehouseInfo = [
    {
      label: {
        content: '直营仓库',
        offset: {
          x: -10,
          y: -25
        }
      },
      extData: {
        id: 1,
        name: '北京直营点',
        isWareHouse: true,
        disabled: true // 不可选中
      },
      icon: {
        size: { width: 34, height: 34 },
        imageSize: { width: 34, height: 34 },
        image: '/assets/images/map/warehouse.png'
      },
      position: [116.397428, 39.90923]
    }
  ];
  markerPoints = [
    ...this.warehouseInfo,
    {
      label: {
        content: '陈师傅',
        offset: {
          x: -10,
          y: -25
        }
      },
      extData: {
        id: 2,
        waybillId: '1zt32423423412',
        address: '广州市天河区陶庄路5号空间',
        taskStatus: 'appointment',
        volume: 5.1,
        diriverFee: 115.5,
        goodName: '三门衣柜-组装',
        remark: '注意不能倒置，需轻拿轻放',
        distanceToWarehouse: 3200
      },
      icon: {
        size: { width: 25, height: 34 },
        imageSize: { width: 25, height: 34 },
        image:
          '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
      },
      position: [116.427281, 39.903719],
      waybillId: '1zt32423423412'
    },
    {
      label: {
        content: '赵信',
        offset: {
          x: -10,
          y: -25
        }
      },
      extData: {
        id: 3,
        name: '舒兰市满盆龙虾饭店',
        distanceToWarehouse: 3100
      },
      icon: {
        size: { width: 25, height: 34 },
        imageSize: { width: 25, height: 34 },
        image:
          '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
      },
      position: [116.370275, 39.907781],
      waybillId: '1zt32423423412'
    },
    {
      label: {
        content: '德邦',
        offset: {
          x: -10,
          y: -25
        }
      },
      extData: {
        id: 31,
        name: '舒兰市满盆龙虾饭店',
        distanceToWarehouse: 6100
      },
      icon: {
        size: { width: 25, height: 34 },
        imageSize: { width: 25, height: 34 },
        image:
          '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
      },
      position: [116.468212, 39.911545],
      waybillId: '1zt32423423412'
    },
    {
      label: {
        content: '压缩',
        offset: {
          x: -10,
          y: -25
        }
      },
      extData: {
        id: 33,
        name: '复兴门',
        distanceToWarehouse: 5000
      },
      icon: {
        size: { width: 25, height: 34 },
        imageSize: { width: 25, height: 34 },
        image:
          '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
      },
      position: [116.35318, 39.906006],
      waybillId: '1zt32423423412'
    },
    {
      label: {
        content: '小炮',
        offset: {
          x: -10,
          y: -25
        }
      },
      extData: {
        id: 43,
        name: '舒兰市满盆龙虾饭店',
        distanceToWarehouse: 7000
      },
      icon: {
        size: { width: 25, height: 34 },
        imageSize: { width: 25, height: 34 },

        image:
          '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
      },
      position: [116.343696, 39.917337],
      waybillId: '1zt32423423412'
    }
  ];
  private _subscription: Subscription;

  private plugin: Promise<AmapMouseToolWrapper>;

  @ViewChild(NgxAmapComponent, { static: false })
  private mapComponent: NgxAmapComponent;

  constructor(
    private mouseToolSrv: AmapMouseToolService,
    public maptoolSrv: MapToolService
  ) {}

  ngOnInit() {
    this.maxHight = window.innerHeight + 'px';
  }

  ngAfterViewInit() {
    this.plugin = this.mapComponent.ready
      .pipe(take(1))
      .toPromise()
      .then((map: any) => {
        this.maptoolSrv.setMap(map);
        return this.mouseToolSrv.of(map);
      });

    // 绑定事件侦听：
    this.plugin.then(mouseTool => {
      this._subscription = mouseTool.on('draw').subscribe(e => {
        // console.log('MouseTool event: "draw"', e);
        const inRingMarkers = this.maptoolSrv.getInRingMarkers(e);
        // tslint:disable-next-line: no-console
        console.log(inRingMarkers);
        // tslint:disable-next-line: no-console
        console.log('选中的所有markers:', this.maptoolSrv.getSelectedMarkers());
        this.closeDraw();
      });
    });
  }

  async draw(type: string) {
    this.drawType = type;
    const wrapper = await this.plugin;
    await wrapper[type]();
  }

  driving() {
    this.maptoolSrv.drivingRender().subscribe(() => {});
  }

  closeDraw(clearMarkStyle = false) {
    this.drawType = '';
    this.plugin.then(wrapper => {
      if (clearMarkStyle) {
        this.maptoolSrv.clearSelectMarkersStyle();
        this.maptoolSrv.clearDriving();
      }
      return wrapper.close(true);
    });
  }

  clearMap() {
    this.maptoolSrv.clearMap();
  }

  ngOnDestroy() {
    // 移除侦听器：
    this.plugin.then(wrapper => {
      return wrapper.close(true);
    });
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
