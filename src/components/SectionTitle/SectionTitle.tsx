import React from 'react';

type SectionTitleProps = {
    title: string | React.ReactNode;
    subtitle?: string;
    /** 'page' = Ana sayfa başlığı (h1, büyük), 'section' = Bölüm başlığı (h2, orta) */
    variant?: 'page' | 'section';
    /** Hizalama: 'center' (varsayılan) veya 'left' */
    align?: 'center' | 'left';
    /** Üst etiket (badge) metni */
    badge?: string;
    /** Alt margin'i kaldır */
    noMargin?: boolean;
};

export default function SectionTitle({
    title,
    subtitle,
    variant = 'section',
    align = 'center',
    badge,
    noMargin = false,
}: SectionTitleProps) {
    const isPage = variant === 'page';
    const isCenter = align === 'center';

    return (
        <div
            className={`
                ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-center lg:text-left max-w-3xl'}
                ${noMargin ? '' : isPage ? 'mb-8' : 'mb-12'}
            `}
        >
            {badge && (
                <div className={`inline-block px-4 py-2 bg-renk2/10 text-renk2 rounded-full text-xs font-bold tracking-wider uppercase mb-4 ${isCenter ? '' : 'mb-6'}`}>
                    {badge}
                </div>
            )}

            {isPage ? (
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-renk1 leading-tight ${subtitle ? 'mb-4' : ''}`}>
                    {title}
                </h1>
            ) : (
                <h2 className={`text-3xl md:text-4xl font-extrabold text-renk1 ${subtitle ? 'mb-4' : ''}`}>
                    {title}
                </h2>
            )}

            {subtitle && (
                <p className={`text-slate-600 leading-relaxed ${isPage ? 'text-base md:text-lg max-w-2xl' : 'text-sm md:text-base'} ${isCenter ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
