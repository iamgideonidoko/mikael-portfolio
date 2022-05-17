import { memo } from 'react';
import { ContactWrapper } from '../styles/Contact.style';
import { ComponentItem } from '../interfaces/general.interface';

const Contact = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <ContactWrapper id="contact" elevated={viewActive ? false : componentItem.elevated}>
            Contact Page
        </ContactWrapper>
    );
};

export default memo(Contact, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
