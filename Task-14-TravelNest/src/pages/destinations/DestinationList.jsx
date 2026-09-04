import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../../components/DestinationCard";
import { destinations } from "../../data/destinations";
function DestinationList(){const[searchParams,setSearchParams]=useSearchParams();const[query,setQuery]=useState(searchParams.get("search")||"");const[category,setCategory]=useState(searchParams.get("category")||"All");const allCategories=["All","Beach","Luxury","Nature","Adventure","Culture"];
 const filtered=useMemo(()=>{return destinations.filter(item=>`${item.name} ${item.country}`.toLowerCase().includes(query.toLowerCase())&&(category==="All"||item.category===category))},[query,category]);
 const update=(q,c)=>{const p={};if(q)p.search=q;if(c!=="All")p.category=c;setSearchParams(p)};
 return <><div className="filter-bar"><div className="filter-input"><span>⌕</span><input value={query} onChange={e=>{setQuery(e.target.value);update(e.target.value,category)}} placeholder="Search by destination or country..." aria-label="Search destinations" /></div><select value={category} onChange={e=>{setCategory(e.target.value);update(query,e.target.value)}} aria-label="Filter by category">{allCategories.map(item=><option key={item}>{item}</option>)}</select></div><p className="result-count">{filtered.length} destination{filtered.length!==1?"s":""} found</p>{filtered.length?<div className="card-grid">{filtered.map(d=><DestinationCard key={d.id} destination={d}/>)}</div>:<div className="empty-state"><span>🌍</span><h2>No destinations found</h2><p>Try a different city or category.</p></div>}</>}
export default DestinationList;
