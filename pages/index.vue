<template>
  <div class="container">
    <div>
      <h1 class="title">Woosung Win Win Biz Demo</h1>
      <div class='list'>
        <div>
          <h2>1.manufacturer</h2>
          <ul>
            <nuxt-link to='manufacturer' tag='li'>지역별 <b>자사</b> 제품 판매 통계 비교</nuxt-link>
            <li>지역별 <b>타사</b> 제품 포함 판매 통계 비교</li>
            <li>기간별 <b>자사</b> 제품 판매 통계 비교</li>
            <li>기간별 <b>타사</b> 제품 포함 판매 통계 비교</li>
          </ul>
        </div>
        <div>
          <h2>2.Seller</h2>          
          <ul>
            <li>전국적으로 최근 팔리는 제품</li>
            <li>주변지역에서 잘 팔리는 제품</li>
            <li>최근 주변지역에서 잘 팔리는 제품의 작물,병해충군</li>
          </ul>
        </div>
        <div>
          <h2>3.partner</h2>
          <ul>
            <li>제조사별 판매 제품 통계</li>
            <li>전국 판매제품 통계</li>
            <li>지역별 제품 판매 통계 비교</li>
            <li>기간별 제품 판매 통계 비교</li>
          </ul>
          </div>
        <div>
          <h2>4.Admin</h2>
        </div>
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
  h1{
    font-size: 2rem;
    font-weight: bold;
  }
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
          word-break: keep-all;
          cursor: pointer;
        }
      }
    }
  }
}
  
</style>