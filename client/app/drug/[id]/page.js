import { DrugDetails } from "@/components/drug-details";

export default async function DrugPage({ params }) {
  const id = Number.parseInt(params.id);
  return <DrugDetails id={id} />;
}