import React from 'react'
import FilterLink from '../containers/FilterLink'
import {Row} from 'antd'

export default class Footer extends React.Component{
    render(){
        return (
            <Row style={{ textAlign: 'center' }}>
                要显示的Todo：{' '}
                <FilterLink filter="SHOW_ALL">全部</FilterLink>
                {' , '}
                <FilterLink filter="SHOW_ACTIVE">未完成</FilterLink>
                {' , '}
                <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
            </Row>
        )
    }
}