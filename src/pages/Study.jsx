import React, { lazy } from 'react';
import { Button, Icon, Row, Col, Table } from 'antd';
import { connect } from 'react-redux';
import position from '../images/position.svg';
import eol from '../images/eol.png';
import xuexi from '../images/0001.png';
import guojia from '../images/guojiaziyuan.png';
import gesheng from '../images/geshengziyuan.png';
import chakangesheng from '../images/ckgs.png';

import youxiupt from '../images/youxiupt.png';
import xdf from '../images/xdf.png';
import hwl from '../images/hwl.png';
import xrs from '../images/xrs.png';

import qtpt from '../images/qtpt.png';

// Form, Icon, Input, Button, Select, Row, Col, Table
class Study extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      selstate: '北京',
      seljieduan: ""
    }
  }

  renderTable() {
    const dataSource = [
      {
        key: '1',
        name: '教育电视台',
        link: 'https://gkcx.eol.cn/school/search'
      },
      {
        key: '2',
        name: '百度',

        link: 'https://www.baidu.com/'
      },
    ];

    const columns = [
      {
        title: '机构',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
      },
      {
        title: '链接',
        ellipsis: true,
        dataIndex: 'link',
        key: 'link',
        render: text => <a href={text} target="_blank">{text}</a>
      }
    ];
    return (
      <Table
        onRow={record => {
          console.log(record);
          return {
            onClick: (event) => {
              debugger
            }, // 点击行
          };
        }}
        pagination={false} bordered={true} dataSource={dataSource} columns={columns} size="small" />
    );
  }


  renderRegions() {
    const regions = [
      {
        area: "华北",
        states: [
          '北京', '天津', '河北', '山西', '内蒙古'
        ]
      }, {
        area: "东北",
        states: [
          '黑龙江', '吉林', '辽宁'
        ]
      }, {
        area: "华东",
        states: [
          '上海', '山东', '江苏', '安徽', '浙江', '江西', '福建'
        ]
      }, {
        area: "华中",
        states: [
          '河南', '湖北', '湖南'
        ]
      }, {
        area: "华南",
        states: [
          '广东', '广西', '海南'
        ]
      }, {
        area: "西北",
        states: [
          '陕西', '宁夏', '甘肃', '青海', '新疆'
        ]
      }, {
        area: "西南",
        states: [
          '重庆', '四川', '贵州', '云南', '西藏'
        ]
      }

    ]
    const listitems = regions.map(item => {
      return (<div className='div2' key={item.area}>
        <div className="div21">
          <span className='span1'>{item.area}</span> <span className='span2'></span>
        </div>
        <Row> {item.states.map(s => <Col key={s} xs={4} sm={3} md={3} lg={1} xl={1}> <span className={`${s === this.state.selstate ? 'spanactive' : 'span3'}`} onClick={e => this.setState({ selstate: s })} >{s}</span></Col>)}
        </Row>
      </div>)
    })

    return (
      <div>
        {listitems}
        <div className='div3'>
          <div className='div31'> <img src={position} alt="position" /><span>{this.state.selstate}</span></div>
          <div className='div32'>
            <h3>{this.state.selstate + '   中小学数字教材服务平台免费开放'}</h3>
            <p>
              疫情袭来，根据河南省教育厅的统一部署，为保障全省中小学生 “停课不停学，学习不延期”，河南省中小学教材服务平台为全省中小学生免费开放，共推出2020年春季使用的正版数字教材154册，以及数万条配套资源，基本实现了学科全覆盖，学段全覆盖，版本覆盖率达到95%以上，除了提供 “数字教材”，河南全省中小学数字教材服务平台还为师生们提供了传统文化视频、图书资源和一师一优课堂教学案例视频资源。
            </p>
            <div>
              <span>链接:</span>
              <a href="http://www.hnszjc.com" target="_blank">http://www.hnszjc.com</a>
            </div>
          </div>
        </div>


      </div>
    );


  }


  jieduanClick = (f) => {
    debugger;
    this.setState({
      seljieduan: f
    })
    // window.location.href="https://www.eol.cn/"
    window.open("https://www.eol.cn/", "_blank");
  }

  renderPt(flag) {
    const youxiu = [
      {
        id: 1,
        logo: xdf,
        mfcolor: '#00695C',
        fl: ['小学阶段', '初中阶段', '高中阶段', '大学阶段']
      },
      {
        id: 2,
        logo: hwl,
        mfcolor: '#0089D3',
        fl: ['小学阶段', '初中阶段', '高中阶段', '大学阶段']
      }
      ,
      {
        id: 3,
        logo: xrs,
        mfcolor: '#FF0000',
        fl: ['高中阶段', '大学阶段', '研究生预科阶段']
      }
    ]
    const qt = ['小学阶段', '初中阶段', '高中阶段', '大学阶段']

    let items = youxiu.map(item => (
      <div key={item.id}>
        <div className="div40">
          <img src={item.logo} />&nbsp;&nbsp; <span style={{ color: item.mfcolor }}>免费提供</span>
        </div>
        <Row >
          {item.fl.map(f =>
            <Col key={item.id + f} xs={8} sm={6} md={4} lg={3} xl={3}  >
              <div onClick={(e) => this.jieduanClick(item.id + f)} className={`div41 ${item.id + f === this.state.seljieduan ? "divactive" : ''}`}>{f}</div>
            </Col>)
          }
        </Row>
      </div>));

    if (flag === 1) {
      items = <Row >{qt.map(f =>
        <Col key={f} xs={8} sm={6} md={4} lg={3} xl={3}  >
          <div onClick={(e) => this.jieduanClick(f)} className={`div41 ${f === this.state.seljieduan ? "divactive" : ''}`}>{f}</div>
        </Col>)} </Row >
    }
    return items;
  }


  render() {
    debugger;
    return (
      <div className="study">

        <div className='div0'>
          <img className="imgeol" src={eol} alt="eol" />
          <div className="div01">
            <img src={xuexi} alt="学习不能停" />
          </div>
          <p className="p1">
            为贯彻落实教育部 “停课不停学” 的工作要求，在全国上下齐心协力防控冠状病毒期间，为方便寒假中的师生预习新学期课程并结合自身情况复习巩固、学习提升，中国教育在线发挥 “互联网+教育” 的作用，推出 “在线大讲堂” ，整合多地优质在线课程资源，服务广大师生。
                     </p>
          <div>
            <img className="imgzy" src={guojia} alt="国家资源" />
            <div style={{marginBottom:"1rem"}}> {this.renderTable()}</div>
          </div>
          <img className='imgzy' src={gesheng} alt="各省资源" />
        </div>
        <div className="div1">
          <img src={chakangesheng} alt="点击查看各省免费课程资源" style={{ height: '3.5rem' }} />
          <div>
            {this.renderRegions()}
          </div>
        </div>
        <div className="div4">
          <div>
            <img className="imgzy" src={youxiupt} alt="优秀平台资源" />
            <div >
              {
                this.renderPt()
              }
            </div>
          </div>
          <div>
            <img className="imgzy" src={qtpt} alt="其他平台资源" />
            <div>
              {
                this.renderPt(1)
              }
            </div>
          </div>
        </div>
        <div className="div5"><h3>版权所有：中国教育在线</h3></div>
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  const { data, error } = state.main;
  return { data, error };
}


const mapDispatchToProps = dispatch => ({

})

const it = connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);

export default it;

