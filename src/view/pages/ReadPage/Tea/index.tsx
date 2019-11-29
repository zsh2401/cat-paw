import React from 'react'
import { Panel } from 'rsuite'
import BilibiliVideo from '../../../components/BilibiliVideo'
export default function Tea() {
    return <div className="container">
        <div className="mr-auto ml-auto" style={{ maxWidth: "650px", marginTop: "30px" }}>
            <Panel header={<b>KISS</b>} shaded bordered>
                <BilibiliVideo borderRadius="10px" style={{ borderRadius: "5px" }} src="https://player.bilibili.com/player.html?aid=67218302&cid=116551955&page=1" />
            </Panel>

            <Panel header={<b>真心的价值?</b>} shaded bordered collapsible>
                许多人都认为,真心是没有用的。确实，单论真心，什么都不能带来。<br />
                但是，当真心引导着一个人为爱做出实际的努力与奋斗时，真心的价值就开始体现。<br />
            </Panel>

            <Panel header={<b>未来的导向?</b>} shaded bordered collapsible>
                就像我之前所说的,我们的未来并非不可预见。<br />
                在可见的将来，在我完成本科阶段的学习后，我们的爱定将更进一步。
            </Panel>

            <Panel header={<b>Across the galaxy together</b>} shaded bordered>
                银河系漫游指南是一部经典的小说,在其翻拍电影版中,男女主的爱也可谓是令人羡慕的。
                <BilibiliVideo borderRadius="10px" style={{ borderRadius: "5px" }} src="https://player.bilibili.com/player.html?aid=67218148&cid=116551745&page=1" />
            </Panel>

            <Panel header={<b>滑宝在性格上的问题</b>} shaded bordered collapsible>
                由于一些你知道的原因,滑宝的性格确实存在缺陷。<br />
                自卑又自负<br />
                自信又敏感<br />
                坚强又脆弱<br />
                温和又暴躁<br />
                强势又懦弱<br />
                我个人认为,这些主要是在过去成长道路上缺乏引导与"爱"所导致的<br />
                我为我明知自己的缺点而感到庆幸,正因如此我才有机会披荆斩棘在今天修正昨天的道路,在明天实现今天的梦想。
                <b>改变的时间或许会比较长,但一定会成功</b>
            </Panel>

            <Panel header={<b>终相见</b>} shaded bordered>
                <BilibiliVideo borderRadius="10px" style={{ borderRadius: "5px" }} src="https://player.bilibili.com/player.html?aid=67218845&cid=116552810&page=1" />
                如果以秒速五厘米的速度行进，在我们相识的六年里，已经走过9460公里，也就是说，已经走过4个两千米。第一个两千千米，你爱上了我，第二个两千千米我们做出青涩的约定，第三个两千千米我们阔别许久，第四个两千千米，我们心的距离只有5厘米。我坚信，下一个两千千米时，我们身体的距离将不足一厘米，因为呀，我正在紧紧地抱着你
            </Panel>

            <Panel header={<b>距离和时间</b>} shaded bordered collapsible expanded={true}>
                <img className="img-fluid d-block mr-auto ml-auto" style={{ borderRadius: "10px" }} src={require("./assets/interstellar.png")} />
                曾经,我喜欢星际穿越是因为其优秀的科幻制作水平和超高水准的配乐。<br />
                而如今，我对其的理解更进一步：是的，"爱是唯一可以穿越时间与空间的事物。"<br />
                距离与时间从来不是爱的阻隔,事实上,异地恋反而更加稳定。<br />
                客观来说,我们见不到彼此,但主观来说,我们的心是那么的近。
                <br /><br />
            </Panel>
        </div>
    </div>
}