import getBillboards from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidat = 0 ;

const Home = async () => {
    const products = await getProducts({isFeatured:true})
    const billboard = await getBillboards("d413d592-cbbf-4308-ad6e-4e7ed1121886");
    return(
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
            
                <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default Home ; 