import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "./footer.less";

/* iconfont class 连接 */
require('@/style/font.js')

export default class PublicFooter extends Component{

    componentDidMount(){
        console.log('footer')
    }
    render(){
        return(
            <footer className="footer-container">
                <div className="footer-list">
                    <i className="iconfont icon-ziyuan"></i>
                    <div>首页</div>
                </div>
                <div className="footer-list">
                    <i className="iconfont icon-xiaoxi"></i>
                    <div>消息</div>
                </div>
                <div className="footer-list">
                    <i className="iconfont icon-jilu"></i>
                    <div>记录</div>
                </div>
                <div className="footer-list">
                    <i className="iconfont icon-wode"></i>
                    <div>我的</div>
                </div>
            </footer>
        )
    }
};