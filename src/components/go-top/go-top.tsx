import Link from "next/link";
import { ArrowUp } from "lucide-react";


export function GoTop() {

    return (
        <Link
        className="bg-foreground fixed bottom-20 right-20 w-max p-3 flex-center rounded-full overflow-hidden" 
        href="/#home">
            <button>
                <ArrowUp className="w-[30px] h-[30px] text-background rounded-full pointer-events-none" strokeWidth={3} />
            </button>
        </Link>
    )
}