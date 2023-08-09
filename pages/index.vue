<template>
  <main class="index-page">
    <div class="container">
      <MainSlider class="index-page__main-slider"></MainSlider>
      <Services class="index-page__services" :servicesListData="servicesList"></Services>
      <Showcase class="index-page__showcase" :productListData="productList"/>
    </div>
  </main>
</template>
<script setup lang="ts">
  const servicesList = [
    {
        title: 'TITLE 1',
        description: 'DESCRIPTON 1 ',
        image: 'https://dveri-milano.ru/upload/iblock/a44/a442e9388ae850acd25536fbff034eae.jpg',
        linkText: 'заказать уникальную дверь',
        id: 1,
    },
    {
        title: 'TITLE 2',
        description: 'DESCRIPTON 2',
        image: 'https://www.nevrida.ru/image/raspil/frezernye-raboty.jpg',
        linkText: 'выбрать из каталога',
        id: 2,
    }
  ]
  const productList = [
    {
      name: 'NAME 1',
      price: 'PRICE 1 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 3,
    },
    {
      name: 'NAME 2',
      price: 'PRICE 2 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 4,
    },
    {
      name: 'NAME 3',
      price: 'PRICE 3 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 5,
    },
    {
      name: 'NAME 4',
      price: 'PRICE 4 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 6,
    },
    {
      name: 'NAME 5',
      price: 'PRICE 5 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 7,
    },
    {
      name: 'NAME 6',
      price: 'PRICE 6 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 8,
    },
    {
      name: 'NAME 7',
      price: 'PRICE 7 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 9,
    },
    {
      name: 'NAME 8',
      price: 'PRICE 8 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 10,
    },
    {
      name: 'NAME 9',
      price: 'PRICE 9 ',
      image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614592951_4-p-dver-na-belom-fone-4.jpg',
      alt: 'alt',
      id: 11,
    },
  ]
</script>
<style lang="scss">
  $b:".index-page";

  #{$b} {
    // .index-page__services
    &__services {
      margin-bottom: 120px;
    }

    // .index-page__main-slider
    &__main-slider {
      margin-bottom: 90px;
    }
    
    // .index-page__showcase
    &__showcase {
      margin-bottom: 90px;
    }
  }
</style>