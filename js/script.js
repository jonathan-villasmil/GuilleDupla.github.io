const images = [
    'img/fotosWeb/PHOTO-2022-09-24-20-21-02.JPG',
    'img/fotosWeb/PHOTO-2022-09-24-20-21-10.JPG',
    'img/fotosWeb/PHOTO-2022-09-24-20-21-12.JPG',
    'img/fotosWeb/-9107779962440779528_IMG_9509.jpeg',
    'img/fotosWeb/MG_0020.JPG',
    'img/fotosWeb/MG_0526.JPG',
    'img/fotosWeb/MG_0568.JPG',
    'img/fotosWeb/MG_2597.JPG',
    'img/fotosWeb/MG_2640.JPG',
    'img/fotosWeb/MG_9912.JPG',
    'img/fotosWeb/MG_9931.JPG',
    'img/fotosWeb/3e1de1c0-8196-467a-a7b4-aafcc1a9c6b5.jpg',
    'img/fotosWeb/5f8a9f22-9f50-498f-ba72-d4f679b60eb5.jpg',
    'img/fotosWeb/9be54330-d7fa-4e4c-8b5c-e59f82874558.jpg',
    'img/fotosWeb/55.JPG',
    'img/fotosWeb/60.JPG',
    'img/fotosWeb/67b503600a403125e32a2c605928f01e.jpg',
    'img/fotosWeb/76faa6ea-5aed-4ae5-ade5-837baf321a2b.jpg',
    'img/fotosWeb/098b11aa-42e2-4e1a-a60d-ece2fe274ea5.jpg',
    'img/fotosWeb/157.jpg',
    'img/fotosWeb/647a25bb-d1f2-47f7-8878-be9c7a879f8d.jpg',
    'img/fotosWeb/2014-04-14-PHOTO-00004756.jpg',
    'img/fotosWeb/2014-04-14-PHOTO-00004759.jpg',
    'img/fotosWeb/2016-06-14-PHOTO-00011856.jpg',
    'img/fotosWeb/2017-06-03-PHOTO-00012363.jpg',
    'img/fotosWeb/4255_85698409364_1034256_n.jpg',
    'img/fotosWeb/5453-1-8.jpg',
    'img/fotosWeb/5453-1-34.jpg',
    'img/fotosWeb/0480558c-fb5d-4051-a93b-083bf8db1c39.jpg',
    'img/fotosWeb/1935088_1214539687263_6783963_n.jpg',
    'img/fotosWeb/20140315_163136.jpg',
    'img/fotosWeb/20140717_235232.jpg',
    'img/fotosWeb/20150624_204239.jpg',
    'img/fotosWeb/20160108_015228.jpg',
    'img/fotosWeb/20160108_015637.jpg',
    'img/fotosWeb/20160918_013444.jpg',
    'img/fotosWeb/20180211_153259.jpg',
    'img/fotosWeb/20180211_173810.jpg',
    'img/fotosWeb/20180606_231517.jpg',
    'img/fotosWeb/20180623_151017.jpg',
    'img/fotosWeb/20190217_083234.jpg',
    'img/fotosWeb/20190321_215552.jpg',
    'img/fotosWeb/20190914_221217.jpg',
    'img/fotosWeb/afd8e711-538a-4112-a9ce-54a081e87372.jpg',
    'img/fotosWeb/c2e70e48-b6bb-422e-8e49-a6774d0242b5.jpg',
    'img/fotosWeb/cc0d6e70-28f8-4f66-8fa7-5e4afce2d0a2.jpg',
    'img/fotosWeb/DSC_0044.JPG',
    'img/fotosWeb/DSC_0050.JPG',
    'img/fotosWeb/DSC_0092.JPG',
    'img/fotosWeb/DSC_0094.JPG',
    'img/fotosWeb/DSC_0162.JPG',
    'img/fotosWeb/DSC_0192.JPG',
    'img/fotosWeb/DSC_0216.JPG',
    'img/fotosWeb/DSC_0338.JPG',
    'img/fotosWeb/DSC_0366.JPG',
    'img/fotosWeb/DSC_0410.JPG',
    'img/fotosWeb/DSC_1656.JPG',
    'img/fotosWeb/DSC03429.JPG',
    'img/fotosWeb/DSC03439.JPG',
    'img/fotosWeb/DSCN0974.JPG',
    'img/fotosWeb/DSCN0976.JPG',
    'img/fotosWeb/DSCN1040.JPG',
    'img/fotosWeb/DSCN1048.JPG',
    'img/fotosWeb/ead8c02c-9fb8-4443-802c-c975f4441573.jpg',
    'img/fotosWeb/escanear0001.jpg',
    'img/fotosWeb/f013061c-284d-4114-b201-0f25f6e3397c.jpg',
    'img/fotosWeb/Foto-017.jpg',
    'img/fotosWeb/Foto0041.jpg', //revisar esta foto 
    'img/fotosWeb/guille_SR_326-.jpg',
    'img/fotosWeb/IMG_0011.JPG',
    'img/fotosWeb/IMG_0031.JPG',
    'img/fotosWeb/IMG_2513.JPG',
    'img/fotosWeb/IMG_3209.JPG',
    'img/fotosWeb/IMG_3272.JPG',
    'img/fotosWeb/IMG_4912.JPEG',
    'img/fotosWeb/IMG_6121.JPG',
    'img/fotosWeb/IMG_6334.PNG',
    'img/fotosWeb/IMG_6336.PNG', //revisar esta foto
    'img/fotosWeb/IMG_8314.jpg',
    'img/fotosWeb/IMG_8654.jpg',
    'img/fotosWeb/IMG_8718.jpg',
    'img/fotosWeb/IMG_8736.jpg',
    'img/fotosWeb/IMG_8762.jpg',
    'img/fotosWeb/IMG_9226.jpeg',
    'img/fotosWeb/IMG_9409.jpeg', //revisar esta foto
    'img/fotosWeb/IMG_9859.jpg',
    'img/fotosWeb/IMG_9866.jpg',
    'img/fotosWeb/IMG_20170310_232147.jpg',
    'img/fotosWeb/IMG_20170325_231507.jpg',
    'img/fotosWeb/IMG_20170326_005444.jpg',
    'img/fotosWeb/IMG_20180120_142336.jpg',
    'img/fotosWeb/IMG_20180120_162130.jpg',
    'img/fotosWeb/IMG_20180120_164410.jpg',
    'img/fotosWeb/IMG_20180120_181607.jpg',
    'img/fotosWeb/IMG_20201114_163406.jpg',
    'img/fotosWeb/IMG_20210131_135606.jpg',
    'img/fotosWeb/IMG-20160307-WA0003.jpg',
    'img/fotosWeb/IMG-20161016-WA0043.jpg',
    'img/fotosWeb/IMG-20210805-WA0006.jpg',
    'img/fotosWeb/IMG-20211012-WA0003.jpg',
    'img/fotosWeb/IMG-20231005-WA0015.jpg',
    'img/fotosWeb/IMG-20231008-WA0013.jpg',//revisar esta foto
    'img/fotosWeb/IMG-20231012-WA0001.jpg',//revisar esta foto
    'img/fotosWeb/IMG-20231012-WA0009.jpg',
    'img/fotosWeb/IMG-20231012-WA0010.jpg',
    'img/fotosWeb/IMG-20231012-WA0011.jpg',
    'img/fotosWeb/IMG-20231012-WA0012.jpg',
    'img/fotosWeb/IMG-20231012-WA0013.jpg',
    'img/fotosWeb/IMG-20231012-WA0014.jpg',
    'img/fotosWeb/P1010261.JPG',
    'img/fotosWeb/P1010281.JPG',
    'img/fotosWeb/P1010796.JPG',//revisar esta foto
    'img/fotosWeb/P1020274.JPG', //revisar esta foto
    'img/fotosWeb/P1030963.JPG',
    'img/fotosWeb/P2110110.JPG',
    'img/fotosWeb/P2110128.JPG',
    'img/fotosWeb/PB044540.JPG',
    'img/fotosWeb/PB044545.JPG',
    'img/fotosWeb/PHOTO-2020-06-24-13-23-55.JPG', //revisar esta foto
    'img/fotosWeb/PHOTO-2020-07-14-13-38-35.JPG',//revisar esta foto
    'img/fotosWeb/PHOTO-2020-07-26-21-26-32.JPG',//revisar esta foto
    'img/fotosWeb/PHOTO-2020-07-26-21-26-38.JPG',
    'img/fotosWeb/PHOTO-2020-08-29-19-29-53.JPG',
    'img/fotosWeb/PHOTO-2020-08-29-20-09-39.JPG',
    'img/fotosWeb/PHOTO-2020-09-27-13-45-39.JPG',//revisar esta foto
    'img/fotosWeb/PHOTO-2020-10-27-14-19-22.JPG', //revisar esta foto
    'img/fotosWeb/Screenshot_20231007_210721_Instagram.jpg',
    'img/fotosWeb/Screenshot_20231009_102215_Facebook~2.jpg',
    'img/fotosWeb/Screenshot_20231009_115745_Facebook.jpg',
    'img/fotosWeb/Screenshot_20231009_115757_Facebook.jpg',
    'img/fotosWeb/signal-2021-11-19-20-59-34-033.jpg',
    'img/fotosWeb/c4f63058-c628-4845-ac16-8cf64c67b857.jpg', 
];

// Función para mostrar la galería
function showGallery() {
    const gallery = document.getElementById('gallery');
    
    images.forEach(image => {
        const imageContainer = document.createElement('div');
        //const imgElement = document.createElement('img');

        imageContainer.classList.add('group','relative','h-72','bg-cover','bg-center','bg-no-repeat','sm:h-84','lg:h-64','xl:h-72','sombra','rounded');

        //imgElement.src = image;

        imageContainer.style.backgroundImage = `url(${image})`;
        
        //imageContainer.appendChild(imgElement);
        gallery.appendChild(imageContainer);
    });
}

// Llama a la función para mostrar la galería cuando la página se carga
window.addEventListener('load', showGallery);