import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg'

export function CartItems() {

    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct, clearCart }
        = useCart()
    return (

        //botão de limpar tudo no checkout
        <div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <button
                    onClick={clearCart}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#A02644',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#cf3057'}  
                    onMouseOut={(e) => e.target.style.backgroundColor = '#A02644'}
                >
                    Limpar Carrinho
                </button>
            </div>

            <Table.Root>
                <Table.Header>
                    <Table.Tr>
                        <Table.Th></Table.Th>
                        <Table.Th>Items</Table.Th>
                        <Table.Th>Preço</Table.Th>
                        <Table.Th>Quantidade</Table.Th>
                        <Table.Th>Total</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Header>
                <Table.Body>
                    {cartProducts?.length ? (
                        cartProducts.map((product) => (
                            <Table.Tr key={product.id}>
                                <Table.Td>
                                    <ProductImage src={product.url} />
                                </Table.Td>
                                <Table.Td>{product.name}</Table.Td>
                                <Table.Td>{product.currencyValue}</Table.Td>
                                <Table.Td>
                                    <ButtonGroup>
                                        <button onClick={() => decreaseProduct(product.id)}>-</button>
                                        {product.quantity}
                                        <button onClick={() => increaseProduct(product.id)}>+</button>
                                    </ButtonGroup>
                                </Table.Td>
                                <Table.Td>
                                    <ProductTotalPrice>
                                        {formatPrice(product.quantity * product.price)}
                                    </ProductTotalPrice>
                                </Table.Td>
                                <Table.Td>
                                    <TrashImage src={TrashIcon} alt='lixeira' onClick={() => deleteProduct(product.id)} />
                                </Table.Td>
                            </Table.Tr>
                        ))
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={6} style={{ textAlign: 'center', fontWeight: 'bold'}}>
                            Carrinho vazio
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Body>
            </Table.Root>

        </div>
    );
}