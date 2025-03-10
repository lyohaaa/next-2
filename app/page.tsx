import { Categories, Container, Title, SortPopup } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
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
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
      </>
  );
}
