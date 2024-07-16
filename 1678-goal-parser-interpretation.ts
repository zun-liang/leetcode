const interpret = (command: string): string => {
    const regexO = /\(\)/g;
    const regexAL = /\(al\)/g;
    return command.replace(regexO, "o").replace(regexAL, "al");
}