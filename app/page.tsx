import { Categories, Container, Title, SortPopup } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";


export default function Home() {
  return (
      <>
      <Container className="mt-10">
        <Title className="font-extrabold" text-size="lg" text={"Все пиццы"}/>
      </Container>

        <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>


          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={0} name="Чизбургер-пицца" price={550} imageUrl={''} />
            </div>
          </div>
        </div>
      </Container>
      </>
  );
}
