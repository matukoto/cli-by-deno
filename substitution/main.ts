import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await new Command()
  .name("substitution")
  .version("0.1.0")
  .description("A substitution cipher CLI tool")
  .command("encode", "Encode する")
  .arguments("<path:string>")
  .action(substitution)
  .parse(Deno.args);
}

// Path: substitution.ts
async function substitution(_: unknown, path: string) {
  console.log(path);
  const text = Deno.readTextFile(path);
  // text を string に変換する
  const string = await text;
  // text を decode する
  const json = JSON.parse(string);
  console.log(json);
}

