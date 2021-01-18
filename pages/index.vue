<template>
  <div class="container">
    <div>
      <h1 class="title">Woosung Win Win Biz Demo</h1>
      <div class='list'>
        <div>
          <h2>1.manufacturer</h2>
          <ul>
            <li>지역별 <b>자사</b> 제품 판매 통계 비교</li>
            <li>지역별 <b>타사</b> 제품 포함 판매 통계 비교</li>
            <li>기간별 <b>자사</b> 제품 판매 통계 비교</li>
            <li>기간별 <b>타사</b> 제품 포함 판매 통계 비교</li>
          </ul>
        </div>
        <div>2.Seller</div>
        <div>3.partner</div>
        <div>4.Admin</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  div.list{
    width: 786px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    &>div{
      width: 45%;
      padding: 20px;
      text-align: left;
      border: 1px solid #d0d0d0;
      margin: 20px 0px;
      border-radius: 3px;
      padding: 20px;
      box-sizing: border-box;
      ul{
        padding: 0;
        li{
          margin: 10px 0px;
          list-style: none;
        }
      }
    }
  }
}
  
</style>