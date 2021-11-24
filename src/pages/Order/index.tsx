import {useSelector} from 'react-redux';
import React, {useMemo, useState} from 'react';
import ModalIcon from '../../components/ModalIcon';
import formatValues from '../../util/formatValues';
import {Data} from '../../components/ProductsFrame';
import EmptyOrder from '../../components/EmptyOrder';
import Octicons from 'react-native-vector-icons/Octicons';
import EvaluateService from '../../components/EvaluateService';
import {
	styles,
	Product,
	Container,
	OrderTitle,
	ProductList,
	ProductImage,
	ProductTitle,
	ProductPrice,
	FinishButton,
	OrderContainer,
	TotalContainer,
	ProductQuantity,
	ObservationText,
	ProductContainer,
	FinishButtonText,
	ProductSinglePrice,
	ProductPriceContainer,
	ProductTitleContainer,
	TotalProductsContainer,
} from './styled';

const Order: React.FC = () => {
	//All constants declarations
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openEvaluate, setOpenEvaluate] = useState<boolean>(false);
	const products = useSelector(({orders}: {orders: any}) => orders);
	const observation: string = 'Não colocar muito sal.';

	//All Functions
	const orderSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	return (
		<>
			<Container>
				<ProductContainer>
					{orderSize > 0 && (
						<OrderContainer>
							<OrderTitle>{'Pedido #0001'}</OrderTitle>
						</OrderContainer>
					)}
					<ProductList
						data={products}
						keyExtractor={(item: Data) => String(item.id)}
						ListEmptyComponent={<EmptyOrder />}
						ListFooterComponentStyle={{
							height: 80,
						}}
						renderItem={({item}: {item: Data}) => (
							<Product>
								<ProductImage source={{uri: item.image_url}} />
								<ProductTitleContainer>
									<ProductTitle>{item.title}</ProductTitle>
									<ProductPriceContainer>
										<ProductSinglePrice>
											{formatValues(item.price)}
										</ProductSinglePrice>
										<TotalContainer>
											<ProductQuantity>{`${item.amountCart}x`}</ProductQuantity>
											<ProductPrice>
												{formatValues(item.price * item.amountCart)}
											</ProductPrice>
										</TotalContainer>
										{item.editable && (
											<ObservationText>{observation}</ObservationText>
										)}
									</ProductPriceContainer>
								</ProductTitleContainer>
							</Product>
						)}
					/>
					{orderSize > 0 && (
						<TotalProductsContainer>
							<FinishButton onPress={() => setOpenModal(true)}>
								<FinishButtonText>{'Encerrar conta'}</FinishButtonText>
							</FinishButton>
						</TotalProductsContainer>
					)}
				</ProductContainer>
			</Container>
			<ModalIcon
				text={
					'Você deseja mesmo encerrar sua conta? Esta ação não poderá ser desfeita!'
				}
				visible={openModal}
				OkCancel={true}
				OkOnPress={() => setOpenEvaluate(true)}
				setVisible={setOpenModal}
				icon={<Octicons name="list-ordered" style={styles.modalIcon} />}
			/>
			<EvaluateService
				onPress={() => console.log('Avaliado')}
				visible={openEvaluate}
				setVisible={setOpenEvaluate}
			/>
		</>
	);
};

export default Order;
