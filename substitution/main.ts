import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

if (import.meta.main) {
  await new Command()
  .name("substitution")
  .version("0.1.0")
  .description("A substitution cipher CLI tool")
  .command("encode", "Encode する")
  .arguments("<path:string>")
  .action(readJson)
  .parse(Deno.args);
}

// Path: substitution.ts
async function readJson(_: unknown, path: string) {
  console.log(path);
  const json = await Deno.readTextFile(path).then((a) => JSON.stringify(a));
  console.log(json);
  const subJson = substitution(json);
  console.log(subJson);
}

function substitution(json: string): string  {
  return json
  .replaceAll("\\n", "")
  .replaceAll("\\", "")
  .replace("\"","")
  .replaceAll(",", "'||chr(44)||'")
  .replaceAll("\"", "'||chr(34)||'")
  .replace(/\|\|chr\(34\)\|\|$/, "");
}

