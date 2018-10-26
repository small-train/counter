<template>
    <div class="page">
        <p class="title">This is my counter</p>
        <div class="content">
            <div class="input-area">
                <p class="result">{{result}}</p>
            </div>
            <div class="btns-container" @click="btnClick($event)">
                <div class="btns btns1">
                    <button class="btn top-left">AC</button>
                    <button class="btn top-left">+/-</button>
                    <button class="btn top-left">%</button>
                    <button class="btn right">÷</button>
                </div>
                <div class="btns btns2">
                    <button class="btn subtop-left">7</button>
                    <button class="btn subtop-left">8</button>
                    <button class="btn subtop-left">9</button>
                    <button class="btn right">×</button>
                </div>
                <div class="btns btns3">
                    <button class="btn subtop-left">4</button>
                    <button class="btn subtop-left">5</button>
                    <button class="btn subtop-left">6</button>
                    <button class="btn right">-</button>
                </div>
                <div class="btns btns4">
                    <button class="btn subtop-left">1</button>
                    <button class="btn subtop-left">2</button>
                    <button class="btn subtop-left">3</button>
                    <button class="btn right">+</button>
                </div>
                <div class="btns btns5">
                    <button class="btn btm-left zero">0</button>
                    <button class="btn btm-left">.</button>
                    <button class="btn right">=</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import {mixinTest1} from './utils/minxin/add.js';
    // import store from './vuex/store.js'
    export default {
        // store,
        name: 'app',
        data() {
            return {
                // state: {
                //     fitstNum:this.$store.state.fitstNum,
                //     secondNum: this.$store.state.secondNum,
                //     result: this.$store.state.result,
                // }
                msg: 'Welcome to Your Vue.js App',
                firstNum: null,
                secondNum: null,
                result: null,
                action: null,
            }
        },
        // mixins: [mixinTest1],
        methods: {
            btnClick: function (e) {
                // console.log(e);
                let el = e.target;
                let htm = el.innerHTML;
                if (htm == 'AC') {
                    // this.$store.commit('clearNums')
                    this.ac();
                } else if (htm == '+') {
                    this.action = 'add';
                    this.add();
                } else if (htm == '-') {
                    this.action = 'sub';
                    // this.$store.dispatch('cle')
                    this.sub();
                } else if (htm == '×') {
                    this.action = 'mul';
                    this.mul();
                } else if (htm == '÷') {
                    this.action = 'division';
                    this.division();
                } else if (htm == '%') {
                    this.action = 'percent';
                    this.percent();
                } else if (htm == '+/-') {
                    this.action = 'fu';
                    this.fu();
                } else if (htm == '=') {
                    this.equl();
                } else if (htm == '.') {
                    this.action = 'dot';
                    this.dot();
                } else {
                    this.num(htm);
                }
            },
            ac: function () {
                this.firstNum = null;
                this.secondNum = null;
                this.result = null;
            },
            num: function (num) {
                if (this.firstNum) {
                    if (!this.result) {
                        this.result = num;
                    } else {
                        this.result += num;
                    }
                    this.secondNum = this.result;
                } else {
                    if (!this.result) {
                        this.result = num;
                    } else {
                        this.result += num;
                    }
                }
                console.log(num);
            },
            add: function () {
                this.firstNum = this.result;
                this.result = null;
            },
            sub: function () {
                this.firstNum = this.result;
                this.result = null;
            },
            mul: function () {
                this.firstNum = this.result;
                this.result = null;
            },
            division: function () {
                this.firstNum = this.result;
                this.result = null;
            },
            fu: function () {

            },
            percent: function () {

            },
            equl: function () {
                if (this.action == 'add') {
                    this.result = Number(this.firstNum) + Number(this.secondNum);
                } else if (this.action == 'sub') {
                    this.result = Number(this.firstNum) - Number(this.secondNum);
                } else if (this.action == 'mul') {
                    this.result = Number(this.firstNum) * Number(this.secondNum);
                } else if (this.action == 'division') {
                    this.result = Number(this.firstNum) / Number(this.secondNum);
                }
            },
            dot: function () {

            },
        }
    }

</script>

<style lang="less">
    @import url('./assets/css/reset.css');

    .page {
        user-select: none;

        .title {
            color: #ccc;
            font-size: 18px;
            text-align: center;
            margin: 10px 0px;
        }

        .content {
            width: 295px;
            margin: 0 auto;
            background-color: #010101;
            padding: 15px;
            .input-area {
                color: #fff;
                border-bottom: 1px solid #fff;
                height: 150px;

                .result {
                    color: #fff;
                    font-size: 26px;
                }
            }

            .btns-container {
                margin-top: 15px;

                .btns {
                    margin: 0 auto;

                    .btn {
                        width: 4rem;
                        height: 4rem;
                        border-radius: 50%;
                        padding: 20px;
                        margin: 3px;
                        font-size: 1rem;
                    }

                    .top-left {
                        background-color: #A6A6A6;
                        color: #080808;
                    }

                    .subtop-left {
                        background-color: #343434;
                        color: #FDFDFD;
                    }

                    .zero {
                        width: 8rem;
                        text-align: left;
                        text-indent: 10px;
                        color: #FDFDFD;
                        border-radius: 2rem;
                    }

                    .right {
                        background-color: #FF9503;
                        color: #FFFDF3;
                    }

                    .btm-left {
                        color: #FDFDFD;
                        background-color: #A6A6A6;
                    }
                }
            }
        }
    }

</style>
