import { memo } from 'react';
import { ServicesWrapper } from '../styles/Services.style';
import { ComponentItem } from '../interfaces/general.interface';

const Services = ({ componentItem }: { componentItem: ComponentItem; activePosition: number }) => {
    console.log(componentItem);
    return <ServicesWrapper id="services">Services</ServicesWrapper>;
};

export default memo(Services, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
