import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { connect } from 'react-redux';
import { SideCollapse } from "../action/MainAction";
import { NavLink, withRouter } from "react-router-dom"
import menuConfig from '../utils/menuConfig';


const { Item, SubMenu } = Menu;
const { Header } = Layout;
class HeadUI extends React.Component {


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




    toggle = () => {
        this.props.toggleSide();
    };


    render() {
        debugger;
        let menu = this.props.menu || menuConfig
        return (
            <Header className="header">
                <Icon className="trigger" type='menu-fold'
                    type={!!this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </Header>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    debugger;
    const { collapsed } = state.main;
    return { collapsed };
}

const mapDispatchToProps = dispatch => ({
    toggleSide: () => {
        debugger;
        return dispatch(SideCollapse());
    }
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeadUI));