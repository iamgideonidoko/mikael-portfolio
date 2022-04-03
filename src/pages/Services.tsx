import { memo } from 'react';
import { ServicesWrapper } from '../styles/Services.style';
import { ComponentItem } from '../interfaces/general.interface';

const Services = ({ componentItem }: { componentItem: ComponentItem; activePosition: number }) => {
    console.log(componentItem);
    return (
        <ServicesWrapper id="services">
            <div>
                <span>
                    6<sup>+</sup>
                </span>
                <span>
                    Years <br /> Experience <br /> Working
                </span>
            </div>
            <div>
                <h4>
                    Product Designer and Digital Creative Director, specialized in{' '}
                    <span>UI/UX, Branding and digital designs</span>.
                </h4>

                <ul>
                    <li>
                        <a href="#">Web Design</a>
                        <p>
                            Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
                            Set grass life years subdue. DISCOVER MORE 🡒
                        </p>
                        <a href="#">Discover More</a>
                    </li>

                    <li>
                        <a href="#">Branding</a>
                        <p>
                            Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
                            Set grass life years subdue. DISCOVER MORE 🡒
                        </p>
                        <a href="#">Discover More</a>
                    </li>

                    <li>
                        <a href="#">Illustration</a>
                        <p>
                            Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
                            Set grass life years subdue. DISCOVER MORE 🡒
                        </p>
                        <a href="#">Discover More</a>
                    </li>

                    <li>
                        <a href="#">Marketing</a>
                        <p>
                            Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser.
                            Set grass life years subdue. DISCOVER MORE 🡒
                        </p>
                        <a href="#">Discover More</a>
                    </li>
                </ul>
            </div>
        </ServicesWrapper>
    );
};

export default memo(Services, (prevProps, nextProps) => {
    return (
        prevProps.activePosition === nextProps.activePosition &&
        prevProps.componentItem.elevated === nextProps.componentItem.elevated
    );
});
