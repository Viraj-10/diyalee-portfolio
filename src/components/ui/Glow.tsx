import React from 'react';

export const Glow = ({
    variant = '30',
    width,
    height,
    blur,
    color,
    style,
}: {
    variant?: string;
    width?: string;
    height?: string;
    blur?: string;
    color?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <div
            className={`glow-blob glow-ellipse-${variant}`}
            style={{
                ...(width && { '--w': width }),
                ...(height && { '--h': height }),
                ...(blur && { '--blur': blur }),
                ...(color && { '--color': color }),
                ...style,
            }}
        />
    );
};
