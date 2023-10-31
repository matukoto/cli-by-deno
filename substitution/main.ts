import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await new Command()
  .name("substitution")
  .version("0.1.0")
  .description("A substitution cipher CLI tool")
  .command("encode", "Encode する")
  .arguments("<json:string>")
  .action(substitution)
  .parse(Deno.args);
}

function substitution() {
  console.log("Hello World!");
}

