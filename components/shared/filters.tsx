import { Title } from "./title";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckBox text="Можно собирать" value="1" />
                <FilterCheckBox text="Новинки" value="2" />
            </div>
        </div>
    );
}