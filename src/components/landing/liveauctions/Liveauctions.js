import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './liveacution.scss';
import ReactApexChart from "react-apexcharts";
const LiveAucations = () => {
    const [options, setobject] = useState(
        {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            //   xaxis: {
            //     type: 'datetime',
            //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            //   },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    )
    const [series, setseries] = useState(
        [
            {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }
            // {
            //   name: 'series2',
            //   data: [11, 32, 45, 32, 34, 52, 41]
            // }
        ]
    )

    return (
        <>

            <section className="live-auctions ">
                <div className="container container-mainsd">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="css-dc1isb">
                                <p className="chakra-text css-wc716m">Vaults</p>
                                <p className="chakra-text css-1specog">Stake Tokens to earn with Automatic Compounding. Users can stake one Token with other users to earn POSI. Refer your friends to earn 5% on their extra rewards.</p>
                            </div>
                            <div className="css-1cvhqcl">

                                <div className="css-1lxwves">
                                    <p className="chakra-text css-20gewk">Your Vault Referral Code</p>
                                    <p className="chakra-text css-1eoozi9">28842</p>
                                </div>
                                <img src="\imagessss\invite-friends (1).svg" alt="" className=" img-sddfxcdf" />

                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="css-ndxi41">
                                <button className="chakra-button css-337xfg">Help</button>
                                <div className="css-9khvif">
                                    <div className="css-xxx6zo">
                                        <p className="chakra-text css-uad7t1">POSI Bounty</p>
                                        <p className="chakra-text css-3l0id9">19.352</p>
                                        <p className="chakra-text css-6a3j62">~$900.280</p>
                                    </div>
                                    <div className="css-j7qwjs">
                                        <button className="chakra-button css-owsrz2">Claim</button>
                                        <p>00:44:54</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9 m-auto  wsjbwqjh ">
                            <div className="row">
                                <div className="col-sm-6  wsjbwqjh sdcdhjcb">
                                    <div className="css-3iv2ba">
                                        <div className="sc-iCfMLu jtNpVd css-6fjwu3">
                                            <p className="chakra-text css-q640ln">
                                                BUSD
                                            </p>
                                            <div className="css-gmuwbf">
                                                <div className="css-4axql0 mr-3">
                                                    <img src="\imagessss\information_circle.svg" alt="" className=" img-sddfxcdf" />
                                                </div>
                                                <div className="css-9ilqir">
                                                    <img src="\imagessss\auto.svg" alt="" className=" mr-2 img-sddfxcdf" /> Auto
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-uqxdai">
                                            <img src="\imagessss\busd.png" alt="" className=" img-sddfxcdf" />
                                            <div className="css-4kfnax">
                                                <p className="chakra-text css-1lejymi">Compounded  <img src="\imagessss\information_circle.svg" alt="" className=" ml-3 " /></p>
                                                <p className="chakra-text css-1jqsdyp">0.000 BUSD</p>
                                                <p className="chakra-text css-3qk7n4">~$0.000</p>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p className="css-juxfli">APY</p>
                                            </div>
                                            <div className="css-79wky">
                                                <p className="css-1qhqtbi">  <img src="\imagessss\calculator.svg" alt="" className=" img-sddfxcdf mr-2" />4,714.33%</p>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p>Pending earnings</p>
                                            </div>
                                            <div className="css-79wky">
                                                <p className="chakra-text css-m5ypl5">0.000</p>
                                                <div className="css-1auej08">
                                                    <p className="chakra-text css-nmpju9">~$0.000</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p>Auto compound in</p>
                                            </div>
                                            <div className="css-79wky ">
                                                <p className="css-m5ypl5">02:35:06</p>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p>BUSD Staked</p>
                                            </div>

                                            <div className="css-79wky ">
                                                <p className="chakra-text css-m5ypl5">--- ---</p>
                                                <div className="css-1auej08">
                                                    <p className="chakra-text css-nmpju9">~$0.000</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="css-k008qs">
                                            <button>Approve BUSD</button>
                                        </div>
                                        <div className="chakra-accordion css-7w6khc">
                                            <button>More <i class="fas ml-2 fa-chevron-down shdsjdbcsj"></i></button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-6 wsjbwqjh sdcdhjcb">
                                    <div className="css-3iv2ba">
                                        <div className="sc-iCfMLu jtNpVd css-6fjwu3">
                                            <p className="chakra-text css-q640ln">
                                                BUSD
                                            </p>
                                            <div className="css-gmuwbf">
                                                <div className="css-4axql0 mr-3">
                                                    <img src="\imagessss\information_circle.svg" alt="" className=" img-sddfxcdf" />
                                                </div>
                                                <div className="css-9ilqir">
                                                    <img src="\imagessss\auto.svg" alt="" className=" mr-2 img-sddfxcdf" /> Auto
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-uqxdai">
                                            <img src="\imagessss\busd.png" alt="" className=" img-sddfxcdf" />
                                            <div className="css-4kfnax">
                                                <p className="chakra-text css-1lejymi">Compounded  <img src="\imagessss\information_circle.svg" alt="" className=" ml-3 " /></p>
                                                <p className="chakra-text css-1jqsdyp">0.0001000<br></br> BUSD</p>
                                                <p className="chakra-text css-3qk7n4">~$0.000</p>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p className="css-juxfli">APY</p>
                                            </div>
                                            <div className="css-79wky">
                                                <p className="css-1qhqtbi">  <img src="\imagessss\calculator.svg" alt="" className=" img-sddfxcdf mr-2" />4,714.33%</p>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p>Pending earnings</p>
                                            </div>
                                            <div className="css-79wky">
                                                <p className="chakra-text css-m5ypl5">0.000</p>
                                                <div className="css-1auej08">
                                                    <p className="chakra-text css-nmpju9">~$0.000</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p>Auto compound in</p>
                                            </div>
                                            <div className="css-79wky ">
                                                <p className="css-m5ypl5">02:35:06</p>
                                            </div>
                                        </div>
                                        <div className="css-1muwiih">
                                            <div className="css-1qrims4">
                                                <p>BUSD Staked</p>
                                            </div>

                                            <div className="css-79wky ">
                                                <p className="chakra-text css-m5ypl5">--- ---</p>
                                                <div className="css-1auej08">
                                                    <p className="chakra-text css-nmpju9">~$0.000</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="css-k008qs">
                                            <button>Approve BUSD</button>
                                        </div>
                                        <div className="chakra-accordion css-7w6khc">
                                            <button>More <i class="fas ml-2 fa-chevron-down shdsjdbcsj"></i></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="container container-mainsd">
                            <div className="ajksbcjsb">
                                <p className="css-1jmcsng">Staking Calculation</p>
                                <p className="css-12o5qeh">Change parameters and get your own staking rate</p>
                            </div>
                            <div className="sjcwjkbc">
                                <div className="scsn">
                                    <div className="main-one">
                                        <p className="sbddx">APY*</p>
                                        <p className="sbddsdsx">4,743.18%</p>
                                    </div>
                                    <div className="main-twodfc">
                                        <p className="sbddx">Daily Icome</p>
                                        <p className="sbddsdsx">$1.04</p>
                                    </div>
                                </div>
                                <div className="css-tf12sc">
                                    <div className="weeklyIncome">
                                        <p className="sbddx">Weekly Income</p>
                                        <p className="sbddsdsx">$7.04</p>
                                    </div>
                                </div>
                                <div className="css-mgnhsd">
                                    <div className="cryptoCurrency">
                                        <div className="sdjbsd">
                                            <p className="sbddx">Weekly Income</p>
                                            <p className="sbddsdsx">$7.04</p>
                                        </div>
                                        <div className="imagesdscf">
                                            <img src="\imagessss\coin-images.png" alt="" className="" />
                                        </div>
                                    </div>
                                    <div className="cryptoCurrencydffcv">
                                        <div className="sdjbsd">
                                            <p className="sbddx">Weekly Income</p>
                                            <p className="sbddsdsx">$7.04</p>
                                        </div>
                                        <div className="imagesdscf">
                                            <img src="\imagessss\coin-images.png" alt="" className="" /> <span className="sdjbs">BUSD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1keu3gn">
                                    <div className="income">
                                        <p className=" csssdsf-1fjn34">Your Annual Income</p>
                                        <p className=" csssfwf-1fjn34">~$4259.16</p>
                                        <p className=" css-sfwev1fjn34">963.0623 POSI</p>
                                    </div>
                                </div>
                                {/* <img src="\imagessss\staking-flow.svg" alt="" className=" d-md-block d-none img-sddfxcdf mt-4" />
                                <img src="\imagessss\staking-flow-mobile.svg" alt="" className="d-md-none d-block img-sddfxcdf mt-4" /> */}

                            </div>
                            <div className="ascbjkc mt-3 mb-3">
                                <p>The longer the duration of the placement of funds and the amount of staking, the higher your income.<br></br> You can withdraw money from staking at any time.<br></br> *Including all commissions.</p>
                            </div>
                            <div className="jhcvbwhvb">
                                <button data-toggle="modal" data-target="#exampleModal">Unlock Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered cshvghvc">
                        <div class="modal-content scscs">
                            <div class="modal-header scswcewf">
                                <h5 class="modal-title" id="exampleModalLabel">Connect to a wallet</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body rervewcc">
                                <div className="cjbcj">
                                    <div className="dnkfzlxms">
                                        <div className="dsnsc">
                                            <img src="\imagessss\metamask.svg" alt="" className=" css-l858m" />
                                        </div>
                                        <div>
                                            <p className="djhcwkdjc">MetaMask</p>
                                        </div>
                                    </div>
                                    <div className="dnkfzlxms">
                                        <div className="dsnsc">
                                            <img src="\imagessss\trustwallet.svg" alt="" className=" css-l858m" />

                                        </div>
                                        <p className="djhcwkdjc">TrustWallet</p>
                                    </div>
                                    <div className="dnkfzlxms">
                                        <div className="dsnsc">
                                            <img src="\imagessss\walletconnect.svg" alt="" className=" css-l858m" />

                                        </div>
                                        <p className="djhcwkdjc">WalletConnect</p>
                                    </div>
                                    <div className="dnkfzlxms">
                                        <div className="dsnsc">
                                            <img src="\imagessss\tokenpocket.svg" alt="" className=" css-l858m" />

                                        </div>
                                        <p className="djhcwkdjc">TokenPocket</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default LiveAucations;
