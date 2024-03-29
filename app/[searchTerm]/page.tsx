import getWikiResult from "@/lib/getWikiResult";
import Item from "./comps/item";


type  Props={
    params:{
        searchTerm: string
    }
}

export default async function searchPage({params:{searchTerm}}:Props) {
    const wikiData: Promise<SearchResult> = getWikiResult(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content=(
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
        {results
            ? Object.values(results).map(result=>{
                return <Item key={result.pageid} result={result}/>
            })
            : <h2 className="p-2 text-xl">{searchTerm} Not Found!</h2>
        }
        </main>
    )
    
    return content
}