import { getProducts } from "@/lib/data";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import ClientLayout from "@/components/layout/ClientLayout";
import HomeWithNavigation from "@/components/home/HomeWithNavigation";

export default async function Home() {
  const products = await getProducts();

  return (
    <ClientLayout>
      <div className="h-screen w-full overflow-hidden">
        <HomeWithNavigation products={products} />
      </div>
    </ClientLayout>
  );
}
