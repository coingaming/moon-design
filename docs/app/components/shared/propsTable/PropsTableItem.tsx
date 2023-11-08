import type { Data } from './index';

const PropsTableItem = ({ name, type, default, description }: Data) => {
    return (
        <div>
            <span>Prop</span>
            <p>{name}</p>
        </div>
    )
}

export default PropsTableItem;