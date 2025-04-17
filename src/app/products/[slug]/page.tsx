import { getProductBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ClientLayout from "@/components/layout/ClientLayout";
import SimpleProductDetail from "@/components/product/SimpleProductDetail";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  try {
    // Properly await the params object
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    if (!slug) {
      return {
        title: 'Product Not Found',
      };
    }

    // Fetch the product data
    const product = await getProductBySlug(slug);

    if (!product) {
      return {
        title: 'Product Not Found',
      };
    }

    return {
      title: `${product.name} | ETHEREAL COLLECTION`,
      description: product.description || 'Product details',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Product Error',
    };
  }
}

// Main page component
export default async function Page({ params }: PageProps) {
  try {
    // Properly await the params object
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    if (!slug) {
      notFound();
    }

    // Fetch the product data
    const product = await getProductBySlug(slug);

    if (!product) {
      notFound();
    }

    return (
      <ClientLayout>
        <SimpleProductDetail product={product} />
      </ClientLayout>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    notFound();
  }
}
