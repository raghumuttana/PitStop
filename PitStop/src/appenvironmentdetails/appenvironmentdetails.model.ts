export class Payload {
    constructor(public ServerName: string,
                public EventPayload: string) {}
}

export class ConfigruationStep {
    constructor(public sequence: number,
                public microserviceName: string,
                public payload: string) {}
}

