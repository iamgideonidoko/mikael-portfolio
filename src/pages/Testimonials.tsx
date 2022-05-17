import { memo } from 'react';
import { TestimonialsWrapper } from '../styles/Testimonials.style';
import { ComponentItem } from '../interfaces/general.interface';

const Testimonials = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <TestimonialsWrapper id="testimonials" elevated={viewActive ? false : componentItem.elevated}>
            Testimonials Page
        </TestimonialsWrapper>
    );
};

export default memo(Testimonials, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
