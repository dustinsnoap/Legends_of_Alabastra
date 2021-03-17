const tiles = [
    [ //0
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,0,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1]
    ], [ //1
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0],
        [1,1,1,1,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //2
        [0,0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1,0],
        [0,0,1,1,1,1,1,0],
        [0,0,1,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0]
    ], [ //3
        [0,0,0,0,0,1,0,0],
        [0,0,0,1,1,1,1,0],
        [0,0,1,1,0,1,1,1],
        [0,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0]
    ], [ //4
        [0,0,0,0,0,1,0,0],
        [0,0,0,1,1,1,1,0],
        [0,0,0,1,1,1,1,0],
        [0,0,0,1,1,1,1,1],
        [0,0,0,1,1,1,1,1],
        [0,0,0,1,1,1,1,1],
        [0,0,1,1,1,1,1,1],
        [0,0,1,1,0,1,1,1]
    ], [ //5
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0]
    ], [ //6
        [0,0,0,0,0,0,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,1,1,1,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0]
    ], [ //7
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1]
    ], [ //8
        [0,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0]
    ], [ //9
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,0,1,1,1],
        [0,0,0,0,0,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1]

    ], [ //10
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,1,1]
    ], [ //11
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [1,0,0,0,0,1,1,0],
        [1,1,1,1,1,1,1,0]
    ], [ //12
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1],
        [0,0,1,1,1,0,0,1],
        [0,0,1,1,0,0,0,1]
    ], [ //13
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,1,1,0,0,0,1],
        [1,1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1,1]
    ], [ //14
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,1],
        [1,1,1,1,1,1,0,0]
    ], [ //15
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1],
        [1,1,1,1,1,0,1,1],
        [0,1,1,1,0,0,0,1]
    ], [ //16
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,1,1,1]
    ], [ //17
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [1,1,1,0,1,1,0,0],
        [1,1,1,1,1,1,0,0],
        [1,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,0,0]
    ], [ //18
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1],
        [0,0,0,1,1,0,0,1],
        [0,0,0,1,1,1,0,1]    
    ], [ //19
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0]
    ], [ //20
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,1,1,1,0,0],
        [0,0,0,1,1,0,0,0]
    ], [ //21
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [0,1,1,1,0,0,0,0],
        [0,0,1,1,1,0,0,0]
    ], [ //22
        [1,1,1,0,0,0,0,0],
        [1,1,1,1,1,0,0,0],
        [1,1,1,1,1,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0]
    ], [ //23
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1],
    ], [ //24
        [0,0,1,1,0,1,1,1],
        [0,1,1,0,0,1,1,1],
        [0,1,1,0,0,1,1,1],
        [0,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0]
    ], [ //25
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,1,0,0,0,0]
    ], [ //26
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0]
    ], [ //27
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1],
        [0,0,0,1,1,1,1,1],
        [0,0,1,1,1,0,0,0],
        [0,0,0,1,1,0,0,0]
    ], [ //28
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,1]
    ], [ //29
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,1,1,1,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,0,0,0,1,1],
        [1,1,0,0,0,0,1,1]
    ], [ //30
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1],
        [1,0,0,0,0,1,1,1],
        [1,0,0,0,1,1,1,0],
        [1,0,0,0,1,1,0,0]
    ], [ //31
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,0,0,0,0],
        [0,1,1,1,0,0,0,0],
        [0,1,1,1,0,0,0,0]
    ], [ //32
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0,0],
        [1,1,1,0,1,1,0,0],
        [1,1,1,0,0,1,0,0]
    ], [ //33
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,0,0,0,0],
        [1,1,1,1,1,1,1,1],
        [0,0,1,1,0,0,0,0],
        [0,1,1,1,0,0,0,0]
    ], [ //34
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1],
        [0,1,1,1,1,1,1,1],
        [0,0,1,1,1,1,0,1],
        [0,0,0,1,1,1,0,0]
    ], [ //35
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1],
        [1,0,0,0,1,1,1,1],
        [1,0,0,1,1,1,0,0],
        [0,0,0,1,1,0,0,0]
    ], [ //36
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0]
    ], [ //37
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ], [ //38
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //39
        [0,0,1,0,0,0,1,1],
        [0,0,1,0,0,0,1,1],
        [0,1,1,0,0,0,1,1],
        [1,1,1,0,0,0,1,1],
        [1,1,1,0,0,0,0,1],
        [1,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //40
        [1,1,1,1,1,1,1,0],
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //41
        [0,1,1,1,0,0,0,1],
        [0,0,1,1,1,0,0,1],
        [0,0,0,1,1,0,1,1],
        [0,0,1,1,1,1,1,1],
        [0,0,1,1,1,1,1,0],
        [0,0,0,1,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,1,0,0,0,0,1,1]
    ], [ //42
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,1,1,1],
        [1,0,0,0,0,1,1,1],
        [0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,1,1],
        [1,0,0,0,0,0,0,1],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0]
    ], [ //43
        [1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,0,0],
        [1,1,1,1,1,0,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //44
        [0,1,1,1,0,0,0,1],
        [0,1,1,1,0,0,0,1],
        [0,1,1,1,0,0,0,1],
        [0,1,1,1,0,0,0,1],
        [0,1,1,1,0,0,0,1],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //45
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,1,1,1],
        [1,1,0,0,0,0,1,1],
        [1,1,1,1,0,0,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //46
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,0,1,1,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //47
        [0,0,0,1,1,1,1,0],
        [0,0,0,0,1,1,1,1],
        [0,1,1,0,0,1,1,1],
        [0,1,1,0,0,0,1,1],
        [1,1,1,1,0,0,1,1],
        [0,0,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //48
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ], [ //49
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0],
        [0,0,0,1,1,1,1,0],
        [0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //50
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [1,1,1,1,0,0,0,1],
        [1,1,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //51
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,1,0,0,0,0],
        [1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //52
        [0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1,1],
        [0,0,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //53
        [1,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,0,0,1,1,1],
        [1,1,1,0,0,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //54
        [1,1,1,1,0,0,0,0],
        [1,1,1,1,0,0,0,0],
        [1,1,1,1,1,0,0,0],
        [0,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //55
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,1,1,1,0],
        [0,0,0,1,1,1,1,1],
        [0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //56
        [0,0,0,0,0,0,1,1],
        [0,0,0,1,1,1,1,0],
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,1],
        [0,0,1,1,1,1,1,1],
        [1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //57
        [1,1,0,0,0,0,0,1],
        [1,1,1,0,0,0,0,1],
        [1,1,1,0,0,0,0,1],
        [1,1,1,0,0,0,0,1],
        [1,1,1,1,1,0,0,1],
        [1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //58
        [1,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,1],
        [1,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,1,1],
        [1,1,1,0,0,1,1,1],
        [0,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //59
        [1,0,0,0,0,0,0,1],
        [1,0,0,0,0,1,1,1],
        [1,0,0,0,1,1,1,0],
        [1,0,0,1,1,1,0,0],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //60
        [1,1,1,1,0,0,0,0],
        [1,1,1,1,0,0,0,0],
        [0,1,1,1,0,0,0,1],
        [1,1,1,1,0,0,0,1],
        [1,1,1,1,1,1,0,1],
        [0,0,1,1,1,0,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //61
        [1,1,1,1,1,0,0,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,0,0],
        [1,0,0,0,1,1,0,0],
        [1,1,0,1,1,1,0,0],
        [1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //62
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,0,0,0,0],
        [0,0,1,1,1,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //63
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,1,0,0,0],
        [0,0,1,1,1,1,0,0],
        [1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //64
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,1,1,1,1],
        [0,0,0,1,1,1,0,0],
        [0,0,0,1,1,1,0,0],
        [0,0,0,1,1,1,1,1],
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //65
        [1,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [0,1,1,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,1,1,0,0,0],
        [0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //66
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //67
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,1,0,0,0,0,0],
        [1,1,1,1,1,0,0,1],
        [0,1,1,1,1,1,1,1],
        [0,0,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ], [ //68
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ]
]

export default tiles