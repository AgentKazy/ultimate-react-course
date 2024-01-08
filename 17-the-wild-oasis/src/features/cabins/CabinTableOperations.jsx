import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by price (\u2191)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by price (\u2193)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (\u2191)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (\u2193)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
