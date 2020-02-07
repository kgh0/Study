import React from "react"
import { Layout, Icon, Menu } from "antd"
import { NavLink, withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import menuConfig from '../utils/menuConfig';
import logoURL from '../images/logo.png';

const { Sider } = Layout;
const { SubMenu } = Menu;
class SiderUI extends React.Component {



    setMenu = (menu, pItem) => {
        debugger;
        return menu.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={item.link}
                        title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        {this.setMenu(item.children, item)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.link} pitem={pItem}>
                    <NavLink to={item.link} >
                        {item.icon && <Icon type={item.icon} />}
                        <span>{item.title}</span>
                    </NavLink>
                </Menu.Item>
            )
        });
    };






    render() {
        let menu = this.props.menu || menuConfig
        return (<Sider theme="dark" className="sider" trigger={null} collapsible collapsed={!!this.props.collapsed}>
            <div className="logo">
                <img className="logo-img" src={logoURL} alt="" /> &nbsp;&nbsp;
                 {!this.props.collapsed &&<span>设施巡检</span>}
            </div>
            <Menu
                mode="vertical"
                theme="dark"
                defaultSelectedKeys={['/home']}
                selectedKeys={[this.props.history.location.pathname]}
            >
                {/* {!!this.props.data && this.setMenu(this.props.data||[])} */}
                {this.setMenu(menu)}
            </Menu>

        </Sider>);
    }
}


const mapStateToProps = (state, ownProps) => {
    debugger;
    const { collapsed } = state.main;
    return { collapsed };
}

export default withRouter(connect(mapStateToProps)(SiderUI));