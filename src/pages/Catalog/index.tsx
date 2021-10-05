import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FloatingCart from '../../components/FloatingCart';
import ProductsFrame from '../../components/ProductsFrame';
import {Container, FlatListContainer, MessageContainer} from './styled';

export default function Catalog() {
	const navigation = useNavigation();
	const prodMeals = [
		{
			id: 1,
			price: 20,
			editable: false,
			title: 'Bife suíno com salada de batatas',
			image_url:
				'https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg',
		},
		{
			id: 2,
			price: 25,
			editable: true,
			title: 'Filé de peixe com salada',
			image_url:
				'data:image/jpeg;base64,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',
		},
		{
			id: 3,
			price: 45,
			editable: false,
			title: 'Espetinho de churrasco com salada',
			image_url:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfBbz0-5LdssKIWgXEjFHmDmxWALtl2SI15kojRnS6JLm2XgBgf8sdcBtMaDA_2-0Nkg&usqp=CAU',
		},
		{
			id: 4,
			price: 35,
			editable: true,
			title: 'Prato feito completo com fritas',
			image_url:
				'https://www.natuslanches.com.br/wp-content/uploads/2014/12/natus-lanches-passo-fundo-67-file-simples-600x400.png',
		},
	];
	const prodDrinks = [
		{
			id: 1,
			price: 3,
			editable: false,
			title: 'Coca Cola Lata 350ml',
			image_url:
				'https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-vetorial-da-c%C3%B3acola-cl%C3%A1ssica-pode-ser-isolada-em-fundo-branco-para-uso-editorial-empresa-de-cocacola-%C3%A9-mais-185464472.jpg',
		},
		{
			id: 2,
			price: 4,
			editable: false,
			title: 'Heineken Lata 350ml',
			image_url: 'https://www.paodeacucar.com/img/uploads/1/623/17634623.png',
		},
		{
			id: 3,
			price: 135,
			editable: false,
			title: 'Gin Tanqueray 750ml',
			image_url:
				'https://www.bebidasfamosas.com.br/pub/media/catalog/product/cache/fcbf346594084df8e9404a9b89c007fe/g/i/gin-tanqueray_1.png',
		},
	];
	const prodIced = [
		{
			id: 1,
			price: 12,
			editable: true,
			title: 'Açaí com morango 200ml',
			image_url:
				'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Tigela-A%C3%A7a%C3%AD-PNG.png',
		},
		{
			id: 2,
			price: 6,
			editable: true,
			title: 'Picolé de Chocolate',
			image_url:
				'https://lospaleteros.com.br/wp-content/uploads/2016/04/BRIGADEIRO-1021x1024.png',
		},
		{
			id: 3,
			price: 25,
			editable: true,
			title: 'Taça sorvete 2 sabores',
			image_url:
				'https://www.kindpng.com/picc/m/53-538712_taa-de-aa-deligeli-sorvete-taa-png-transparent.png',
		},
	];
	return (
		<>
			<Container>
				<FlatListContainer>
					<ProductsFrame productsList={prodMeals} productsType={'Refeições'} />
					<ProductsFrame productsList={prodDrinks} productsType={'Bebidas'} />
					<ProductsFrame productsList={prodIced} productsType={'Gelados'} />
					<MessageContainer />
				</FlatListContainer>
				<FloatingCart />
			</Container>
		</>
	);
}
