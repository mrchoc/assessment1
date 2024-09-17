"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ProfileForm() {
  const [authors, setAuthors] = useState([]);
  const form = useForm({
    defaultValues: {
      authorName: "",
    },
  });

  function onSubmit(values) {
    setAuthors((authors) => [...authors, values["authorName"]]);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 space-x-2 flex">
          <FormField
            control={form.control}
            name="authorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author name</FormLabel>
                <FormControl>
                  <Input placeholder="Joseph" {...field} />
                </FormControl>
                <FormDescription>This is your author name.</FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {authors.map((author) => (
        <div>{author}</div>
      ))}
    </div>
  );
}
