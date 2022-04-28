let idoabi = '[{"inputs":[],"name":"allcoin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"key","type":"string"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"limit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"manager","outputs":[{"internalType":"contract Manager","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"teller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"teller_","type":"address"}],"name":"setTeller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"},{"internalType":"uint256","name":"limit_","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
$(document).ready(() => {
    $("#ido_win").hide();
    $(".box div").click((event) => {
        let obj = $(event.target);
        let btns = $(".box div");
        btns.removeClass("checked1");
        btns.removeClass("checked2");
        btns.removeClass("checked3");
        switch (event.target.className) {
            case "item1":
                obj.addClass("checked1");
                resetTop("introduction");
                break;
            case "item2":
                obj.addClass("checked2");
                resetTop("artwork");
                break;
            case "item3":
                obj.addClass("checked3");
                resetTop("version");
                break;
        }
    });
    $(".intr_items div").click((event) => {
        let content = $("#intr_content");

        switch (event.currentTarget.id) {
            case "intr1":
                content.html("<p>游戏中的奖池将一直存在并持续滚存，是作为回购玩家图腾的最大资金保障，同时也是项目持久运营的坚挺手段。</p><p>游戏中所有NFT道具都锁定了LGC，销毁后都可以得到其锁定的价值，无论如何都不会亏。</p>");
                break;
            case "intr2":
                content.html("<p>无损挖矿：玩家可以质押数字资产进行挖矿，时间结束后可全额无损取出质押的资产，相当于免费获得LGC。</p><p>角色挖矿：还可以消耗少量数字资产兑换矿镐进行角色挖矿，玩家角色战斗力越高，获得的收益就越高。</p>");
                break;
            case "intr3":
                content.html("<p>副本产出装备：副本将概率产出商店极少出现的银龙品质和金龙品质的装备，其锁定的LGC更多，强化等级上限更高。</p><p>副本产出图腾碎片：副本将概率产出图腾碎片，每一个返奖周期都能使用图腾碎片（可交易、可拍卖）合成的图腾（可交易、可拍卖）去兑换奖池资产，奖池资产将会随着游戏周期的更迭越滚越大。</p><p>副本产出艺术品碎片：副本将产出艺术品碎片（可交易、可拍卖），碎片可合成完整的加密艺术品（可交易、可拍卖），无论是艺术家还是加密艺术品持有者都可以通过交易和拍卖来获利。</p>");
                break;
            case "intr4":
                content.html("<p>普通人：质押点小钱试试手，白嫖点LGC套现走人。</p><p>一般人：创建角色买点矿镐蹲矿洞每天赚些稳定收入。</p><p>明白人：升级角色购买装备去副本试试手气，打到高阶装备或者图腾碎片卖出发笔小财。</p><p>非常人：强化装备副本蹲点收购图腾倒卖艺术品发大财。</p>");
                break;
        }
    });
    readBonusPool();
    // idoTime();
});

function readBonusPool() {
    let abi = '[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"awardsInfos","outputs":[{"internalType":"uint8","name":"types","type":"uint8"},{"internalType":"uint32","name":"count","type":"uint32"},{"internalType":"uint32","name":"redeemedCount","type":"uint32"},{"internalType":"uint32","name":"fragmentCount","type":"uint32"},{"internalType":"uint32","name":"lastFragmentCount","type":"uint32"},{"internalType":"uint8","name":"ratio","type":"uint8"},{"internalType":"uint256","name":"bonus","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"bonusDuration","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"current","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"key","type":"string"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"manager","outputs":[{"internalType":"contract Manager","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"number","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"perFragmentToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rebateRatio","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint256","name":"","type":"uint256"},{"components":[{"internalType":"uint64","name":"startTime","type":"uint64"},{"internalType":"uint64","name":"endTime","type":"uint64"},{"components":[{"internalType":"uint8","name":"types","type":"uint8"},{"internalType":"uint32","name":"count","type":"uint32"},{"internalType":"uint32","name":"redeemedCount","type":"uint32"},{"internalType":"uint32","name":"fragmentCount","type":"uint32"},{"internalType":"uint32","name":"lastFragmentCount","type":"uint32"},{"internalType":"uint8","name":"ratio","type":"uint8"},{"internalType":"uint256","name":"bonus","type":"uint256"}],"internalType":"struct BonusPool.AwardsInfo[]","name":"awardsInfos","type":"tuple[]"}],"internalType":"struct BonusPool.Period","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"getPeriod","outputs":[{"components":[{"internalType":"uint64","name":"startTime","type":"uint64"},{"internalType":"uint64","name":"endTime","type":"uint64"},{"components":[{"internalType":"uint8","name":"types","type":"uint8"},{"internalType":"uint32","name":"count","type":"uint32"},{"internalType":"uint32","name":"redeemedCount","type":"uint32"},{"internalType":"uint32","name":"fragmentCount","type":"uint32"},{"internalType":"uint32","name":"lastFragmentCount","type":"uint32"},{"internalType":"uint8","name":"ratio","type":"uint8"},{"internalType":"uint256","name":"bonus","type":"uint256"}],"internalType":"struct BonusPool.AwardsInfo[]","name":"awardsInfos","type":"tuple[]"}],"internalType":"struct BonusPool.Period","name":"period","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"components":[{"internalType":"uint8","name":"types","type":"uint8"},{"internalType":"uint32","name":"count","type":"uint32"},{"internalType":"uint32","name":"redeemedCount","type":"uint32"},{"internalType":"uint32","name":"fragmentCount","type":"uint32"},{"internalType":"uint32","name":"lastFragmentCount","type":"uint32"},{"internalType":"uint8","name":"ratio","type":"uint8"},{"internalType":"uint256","name":"bonus","type":"uint256"}],"internalType":"struct BonusPool.AwardsInfo","name":"awardsInfo","type":"tuple"}],"name":"addAwards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPeriodFragment","outputs":[{"components":[{"internalType":"uint8","name":"fType","type":"uint8"},{"internalType":"uint64","name":"id","type":"uint64"},{"internalType":"uint32","name":"number","type":"uint32"},{"internalType":"uint32","name":"lastFragmentCount","type":"uint32"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"internalType":"struct FragmentInfo[]","name":"fragmentInfos","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"components":[{"internalType":"uint8","name":"fType","type":"uint8"},{"internalType":"uint64","name":"id","type":"uint64"},{"internalType":"uint32","name":"number","type":"uint32"},{"internalType":"uint32","name":"lastFragmentCount","type":"uint32"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"internalType":"struct FragmentInfo","name":"fi","type":"tuple"}],"name":"updateFragment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"injectCapital","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"open","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"}]';
    let web3 = new Web3('https://bsc-dataseed1.binance.org');
    let contract = new web3.eth.Contract(JSON.parse(abi), "0x5E097157923B2fFe0D6Cb73AF74F29d35dFC5EE8");
    // console.log(contract);
    contract.methods.getInfo().call({}, (err, result) => {
        // console.log(result);
        let lgc=web3.utils.fromWei(result[0], "ether")
        $("#bonus_pool").html(parseFloat(lgc).toFixed(4)+"LGC");
        // $("#bonus_pool").html("$10000");
    });

}

function resetTop(item) {
    let div = $("#" + item);
    let cur = $($("#contents").children()[1]);
    let one = $($("#contents").children()[0]);
    console.log(cur);
    cur.insertAfter(div);
    div.insertAfter(one);
}

function showWX() {
    $("#fade").show();
    $("#div_wx").show();
}

function CloseWX() {
    $("#fade").hide();
    $("#div_wx").hide();
}

function idoTime() {
    let endTime = 162721440;
    let nowTime = Date.now() / 1000;
    if (nowTime < endTime) {
        let timespan = Math.floor(Math.abs(nowTime - endTime));
        let hour = Math.floor(timespan / 3600);
        hour = addz(hour);
        let minute = Math.floor(timespan % 3600 / 60);
        minute = addz(minute);
        let second = timespan % 3600 - (minute * 60);
        second = addz(second);
        let time = hour + ":" + minute + ":" + second;
        $(".mid_btn a").html("IDO倒计时 " + time);
        setTimeout(() => { idoTime(); }, 1000);
    } else {
        if (!!walletApi && !!curAccount) {
            let contract = new walletApi.eth.Contract(JSON.parse(idoabi), "0x2C0cBCc5Eb3eC0e1e781eAa63BAfd60241C634e1");
            contract.methods.allcoin().call({}, (err, result) => {
                console.log(result);
                $("#all_coin").html("总剩余额度: " + walletApi.utils.fromWei(result, "ether") + " LGC");
                if (result.toString() != "0") {
                    $(".mid_btn a").html("进入游戏");
                    location.href = "https://game.legendnft.com";
                } else {
                    $(".mid_btn a").html("参与IDO");
                    showBuy();
                }
            });
        } else {
            $(".mid_btn a").html("连接钱包");
            $(".mid_btn a").click(() => {
                wallet();
            });
        }

    }

}

function addz(time) {
    let m = time.toString();
    if (m.length == 1) m = "0" + m;
    return m;
}

function showBuy() {
    getAllCoin();
    getMyCoin();
    $("#ido_win").show();
}

var curAccount = null;
var walletApi = null;

function buy(amount) {
    if (!!walletApi && !!curAccount) {
        let contract = new walletApi.eth.Contract(JSON.parse(idoabi), "0x2C0cBCc5Eb3eC0e1e781eAa63BAfd60241C634e1");
        contract.methods.buy(amount).send({ from: curAccount }, (err, result) => {
            if (result == undefined) {
                alert("发生错误，请检查您的USDT余额!");
                return;
            }
            getAllCoin();
            getMyCoin();
        });
    } else {
        wallet();
    }
}

function approve(amount) {
    let abi = '[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]';
    if (!!walletApi && !!curAccount) {
        let contract = new walletApi.eth.Contract(JSON.parse(abi), "0x55d398326f99059ff775485246999027b3197955");
        contract.methods.approve("0x2C0cBCc5Eb3eC0e1e781eAa63BAfd60241C634e1", amount).send({ from: curAccount }, (err, result) => {
            if (result != undefined) {
                alert("授权操作成功，请点击购买!");
            }
        });
    } else {
        wallet();
    }
}

function doApprove() {
    let a = $("#amount").val();
    if (a != "") {
        let amount = parseFloat(a);
        amount = amount * 0.05;
        amount = walletApi.utils.toWei(amount.toString(), "ether");
        approve(amount);
    } else {
        alert("请输入数量!");
    }
}

function doBuy() {
    let a = $("#amount").val();
    if (a != "") {
        let amount = parseFloat(a);
        amount = walletApi.utils.toWei(amount.toString(), "ether");
        buy(amount);
    } else {
        alert("请输入数量!");
    }
}

async function wallet() {
    let win = window;
    if (win.ethereum) {
        win.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length) {
                curAccount = accounts[0];
            }
        });
        walletApi = new Web3(win.ethereum);
        try {
            await win.ethereum.enable();
        } catch (error) {
            console.error(error);
        }
    } else if (win.Web3) {
        walletApi = win.Web3;
    }
    let us = await walletApi.eth.getAccounts();
    if (us.length > 0) curAccount = us[0];
    if (!!curAccount && !!walletApi) {
        $(".mid_btn a").html("参与IDO");
        showBuy();
    }
}

function closeIdo() {
    $("#ido_win").hide();
}

function calcUSDT(obj) {
    obj.value = obj.value.match(/[0-9]{1,10}\.?[0-9]{0,6}/)
    let a = obj.value;
    let amount = 0;
    if (a != "") {
        amount = parseFloat(a);
    }
    if (amount > 2000) {
        amount = 2000;
        obj.value = "2000";
    }
    let value = amount * 0.05;
    let div = $("#show_usdt");
    div.html("需要支付: " + value + "USDT");
}

function getAllCoin() {
    if (!!walletApi && !!curAccount) {
        let contract = new walletApi.eth.Contract(JSON.parse(idoabi), "0x2C0cBCc5Eb3eC0e1e781eAa63BAfd60241C634e1");
        contract.methods.allcoin().call({}, (err, result) => {
            console.log(result);
            $("#all_coin").html("总剩余额度: " + walletApi.utils.fromWei(result, "ether") + " LGC");
        });
    }
}

function getMyCoin() {
    if (!!walletApi && !!curAccount) {
        let contract = new walletApi.eth.Contract(JSON.parse(idoabi), "0x2C0cBCc5Eb3eC0e1e781eAa63BAfd60241C634e1");
        contract.methods.users(curAccount).call({}, (err, result) => {
            console.log(result);
            let am = walletApi.utils.fromWei(result, "ether")
            am = 100 / 0.05 - parseFloat(am);
            $("#my_coin").html("您可以购买: " + am + " LGC");
        });
    }
}