import * as React from 'react';
import { Template, BilibiliVideo } from '../../components/';
import SZRatInfo from '../../components/SZRatInfo';
import { useTopPace } from '../../../common/hooks';
export default function IndexPage() {
  let [getter, setter] = useTopPace();
  const clicker = () => {
    setter(getter() + 10);
  }

  return <Template childrenWrapperClassName="container">
    <SZRatInfo />
    <br/>
    <button className="btn btn-light d-block mr-auto ml-auto" onClick={clicker}>Top Pace Demo</button>
    <br/>
    <BilibiliVideo style={{ maxWidth: "400px" }} className="mr-auto ml-auto w-100" src="//player.bilibili.com/player.html?aid=67214844&cid=116546077&page=1" />
  </Template>
}
