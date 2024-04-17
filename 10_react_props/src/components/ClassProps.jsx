import { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    // 힌트 : {this.props.drink} -> 아메리카노
    /*
      this.props = 객체
      {
        drink: '아메리카노',
        payment: '카드';
      }
    */

    return (
      <>
        <h1>클래스형 컴포넌트에서의 props 사용</h1>
        <div>
          주문하신 음료는 {this.props.drink}이고, 결재는 {this.props.payment}{" "}
          맞으실까요?
        </div>
        <div>결재는 {this.props.price}원 입니다.</div>
      </>
    );
  }

  static defaultProps = {
    price: 8500,
  };
}
