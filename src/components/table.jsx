import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function UserTable() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" }).then((res) =>
    res.json(),
  );

  return (
    <Table>
      <TableCaption>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, key) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.company.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
