import React, { useState } from 'react';
import { Settings, ShieldCheck, ClipboardCheck, PackageCheck, Wrench, RefreshCw } from 'lucide-react';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const centerX = 0;
    const centerY = 0;
    const radius = 220;
    const innerRadius = 90;

    const degToRad = (deg: number) => (Math.PI / 180) * deg;
    const getPoint = (angle: number, r: number) => ({
        x: centerX + r * Math.cos(degToRad(angle - 90)),
        y: centerY + r * Math.sin(degToRad(angle - 90))
    });

    const getSegmentPoints = (startAngle: number, endAngle: number) => {
        const p1 = getPoint(startAngle, innerRadius);
        const p2 = getPoint(endAngle, innerRadius);
        const p3 = getPoint(endAngle, radius);
        const p4 = getPoint(startAngle, radius);
        return `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`;
    };

    const getIconPoint = (angle: number) => getPoint(angle, innerRadius + (radius - innerRadius) / 2);
    const getLineEndPoint = (angle: number) => getPoint(angle, radius + 20);

    // Dilimin açısı yönünde dışarıya kayma miktarını hesapla
    const getHoverTranslate = (angle: number, amount: number) => {
        const rad = degToRad(angle - 90);
        return { tx: Math.cos(rad) * amount, ty: Math.sin(rad) * amount };
    };

    const getTextProps = (angle: number) => {
        const p = getPoint(angle, radius + 40);
        let anchor = "middle";
        if (angle === 60 || angle === 120) { anchor = "start"; p.x += 8; }
        if (angle === 240 || angle === 300) { anchor = "end"; p.x -= 8; }
        if (angle === 0) p.y -= 10;
        if (angle === 180) p.y += 20;
        return { x: p.x, y: p.y, textAnchor: anchor as "middle" | "start" | "end" };
    };

    const servicesData = [
        { angle: 30, title: "Mühendislik & Projelendirme", icon: <Settings size={40} className="text-slate-50" strokeWidth={1} />, color: "#013186" },
        { angle: 90, title: "Keşif & Planlama", icon: <ShieldCheck size={40} className="text-slate-50" strokeWidth={1} />, color: "#013186" },
        { angle: 150, title: "Tedarik Organizasyonu", icon: <ClipboardCheck size={40} className="text-slate-50" strokeWidth={1} />, color: "#013186" },
        { angle: 210, title: "Şantiye & Saha Yönetimi", icon: <PackageCheck size={40} className="text-slate-50" strokeWidth={1} />, color: "#013186" },
        { angle: 270, title: "Anahtar Teslim Uygulama", icon: <Wrench size={40} className="text-slate-50" strokeWidth={1} />, color: "#013186" },
        { angle: 330, title: "Test & Devreye Alma", icon: <RefreshCw size={40} className="text-slate-50" strokeWidth={1} />, color: "#013186" }
    ];

    const innerHexPoints = Array.from({ length: 6 }).map((_, i) => {
        const p = getPoint(i * 60, innerRadius);
        return `${p.x},${p.y}`;
    }).join(' ');

    return (
        <section className="w-full py-fluid-xl bg-slate-50 overflow-hidden @container">
            <div className="container mx-auto px-fluid-md">
                <div className="text-center mb-fluid-xl @[64rem]:hidden">
                    <h2 className="text-3xl font-bold text-renk1 mb-4">Hizmetlerimiz</h2>
                    <p className="text-slate-500 text-base">Mühendislikten uygulamaya uçtan uca çözümler</p>
                </div>

                {/* Masaüstü Görünüm (Altıgen SVG) */}
                <div className="hidden @[64rem]:flex justify-center items-center">
                    <div className="relative w-full max-w-3xl aspect-square scale-110">
                        <svg viewBox="-420 -420 840 840" className="w-full h-full drop-shadow-2xl overflow-visible">
                            {/* SVG Content remains the same as it's already highly refined and conditionally hidden */}
                            {/* DİLİMLER — hover ile dışarıya kayma */}
                            {servicesData.map((service, i) => {
                                const isHovered = hoveredIndex === i;
                                const { tx, ty } = isHovered ? getHoverTranslate(service.angle, 14) : { tx: 0, ty: 0 };
                                return (
                                    <polygon
                                        key={`seg-${i}`}
                                        points={getSegmentPoints(service.angle - 30, service.angle + 30)}
                                        fill={service.color}
                                        stroke="#ffffff"
                                        strokeWidth="1.5"
                                        style={{
                                            transform: `translate(${tx}px, ${ty}px)`,
                                            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease',
                                            filter: isHovered ? 'brightness(1.12) drop-shadow(0 4px 10px rgba(1,113,222,0.35))' : 'none',
                                            cursor: 'pointer',
                                        }}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    />
                                );
                            })}

                            {/* ÇİZGİLER & DIŞ METİNLER */}
                            {servicesData.map((service, i) => {
                                const cornerAngle = i * 60;
                                const start = getPoint(cornerAngle, innerRadius);
                                const end = getLineEndPoint(cornerAngle);
                                const props = getTextProps(cornerAngle);
                                return (
                                    <g key={`line-txt-${i}`}>
                                        <line
                                            x1={start.x} y1={start.y}
                                            x2={end.x} y2={end.y}
                                            stroke="#a6a48f"
                                            strokeWidth="2"
                                        />
                                        <text
                                            x={props.x}
                                            y={props.y}
                                            fill="#013186"
                                            fontSize="14"
                                            fontWeight="600"
                                            textAnchor={props.textAnchor}
                                            className="font-montserrat tracking-tight"
                                        >
                                            {service.title.split('\n').map((str, j) => (
                                                <tspan key={j} x={props.x} dy={j === 0 ? 0 : 20}>{str}</tspan>
                                            ))}
                                        </text>
                                    </g>
                                );
                            })}

                            {/* İÇ ALTIGEN */}
                            <polygon
                                points={innerHexPoints}
                                fill="#ffffff"
                                stroke="#a6a48f"
                                strokeWidth="3"
                            />

                            {/* MERKEZ LOGO */}
                            <image
                                href="/logo.svg"
                                x="-50"
                                y="-20"
                                width="100"
                                height="40"
                                preserveAspectRatio="xMidYMid meet"
                            />
                        </svg>

                        {/* İKONLAR */}
                        <div className="absolute inset-0 pointer-events-none">
                            {servicesData.map((service, i) => {
                                const p = getIconPoint(service.angle);
                                const isHovered = hoveredIndex === i;
                                const { tx, ty } = isHovered ? getHoverTranslate(service.angle, 14) : { tx: 0, ty: 0 };
                                const baseLeft = ((p.x + 420) / 840) * 100;
                                const baseTop = ((p.y + 420) / 840) * 100;
                                const shiftX = (tx / 840) * 100;
                                const shiftY = (ty / 840) * 100;

                                return (
                                    <div
                                        key={`icon-${i}`}
                                        className="absolute flex items-center justify-center pointer-events-none"
                                        style={{
                                            left: `${baseLeft + shiftX}%`,
                                            top: `${baseTop + shiftY}%`,
                                            transform: 'translate(-50%, -50%)',
                                            transition: 'left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}
                                    >
                                        {service.icon}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobil Görünüm (Kart Listesi) */}
                <div className="@[64rem]:hidden grid grid-cols-1 md:grid-cols-2 gap-fluid-md">
                    {servicesData.map((service, i) => (
                        <div
                            key={`mobile-svc-${i}`}
                            className="bg-white p-fluid-md rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-fluid-md hover:shadow-md transition-shadow h-full"
                        >
                            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                                {React.cloneElement(service.icon as React.ReactElement, { size: 28 } as any)}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-renk1 mb-2 leading-tight">{service.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Profesyonel hizmet anlayışımızla projenizin her aşamasında yanınızdayız.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
