import { memo } from 'react';
import { BlogWrapper } from '../styles/Blog.style';
import { ComponentItem } from '../interfaces/general.interface';

const Blog = ({ componentItem, activePosition }: { componentItem: ComponentItem; activePosition: number }) => {
    const viewActive = componentItem.position === activePosition;
    return (
        <BlogWrapper id="blog" elevated={viewActive ? false : componentItem.elevated}>
            Blog Page
        </BlogWrapper>
    );
};

export default memo(Blog, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
