// Names that a recipe can qualify with a namespace path, split into segments:
// `Foo.bar` is ["Foo", "bar"], an unqualified `bar` is ["bar"].
//
// This lives in its own module because both layers need it and neither should
// have to reach for the other: `ast.ts` uses it for the variable and style-tag
// names it parses, and `dag.ts` builds `StyleTag` on it. `dag.ts` is otherwise
// free of imports — a renderer consuming a `Dag` has no business pulling in
// the AST — so the shared vocabulary goes below both rather than inside one.
export type QualifiableIdentifier = string[];
