
export function Card({children}:any) {
    return (
        <>
            <div className="h-full w-full bg-linear-[110deg,var(--card-gradient-from)_0%,var(--card-gradient-via)_50%,var(--card-gradient-to)_100%] shadow-[var(--combined-shadow)] rounded-lg backdrop-blur-sm">
                {children}
            </div>
        </>
    );
}

