import React from 'react'
import StdProps from '../../../../common/std-props'
import HWCenter from '../../../components/HWCenter'
import { Button, IconButton, Icon, Divider } from 'rsuite'
import useGoBack from '../../../../common/hooks/useGoBack'
//@ts-ignore
import style from './index.css'
export interface P1Props extends StdProps {
    onRequestNext: () => void;
}
export default function P1(props: P1Props) {
    const goBack = useGoBack();
    const { onRequestNext, ...htmlAttr } = props;
    return <div {...htmlAttr}>
        <div className={`d-flex flex-column h-100 text-white ${style.bg}`}>
            <div className="flex-grow-1 d-flex align-items-stretch">
                <div className="h-100 w-100 d-flex flex-column justify-content-center">
                    <div className="animated fadeIn slow text-center">
                        <h1 className="font-weight-bold" style={{ textDecoration: "underline" }}>FLOW</h1>
                        <p className="animated fadeIn delay-2s">我真的有许多许多话想对你说...</p>
                        <br /><br />
                        <div className="animated fadeIn delay-2s">
                            <Divider className="w-50 mr-auto ml-auto">lrc</Divider>
                            <p>舞い落ちた花弁が 粉雪に変わる頃</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow-0 animated fadeIn delay-3s">
                <IconButton className="animated infinite slow bounce delay-2s d-block mr-auto ml-auto text-dark"
                    icon={<Icon icon="arrow-down2" />} onClick={onRequestNext} circle />
                <br /><br />
            </div>
        </div>
    </div>
}