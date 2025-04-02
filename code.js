function hasCycle(graph) {

    function depthFirstSearch(graph, startNode, targetNode) {
        var checked = [];
        var que = [];
        firstt = true;

        function search(graph, startNode, targetNode, checked, que, firstt){
            var returnvalue = false;
        
            if (startNode == targetNode && firstt == false){
                return true;
            }
            if (!graph[startNode] || graph.length < 1) {
                return false;
            }
        
            var lengthh = (graph[startNode].length)
        

            for (let i = 0; i < lengthh; i++){
                var newnode = graph[startNode][i];
                if (!(checked.includes(i)) && newnode != 0){
                    checked.push(i);
                    returnvalue = search(graph, i, targetNode, checked, que, false);
                }
                
                if (returnvalue == true){
                    que.push(i);
                    return true;
                }
            }
        
            return false;
        }
    
        var found = search(graph, startNode, targetNode, checked, que);
        if (found && (graph.length > 0)) {
            que.push(startNode);
            que.reverse();
        }
    
        if (que.length == 0){
           return false; 
        }
        return true;
    }

    var returnvalue = false
    for (var i = 0; i < graph.length; i++){
        returnvalue = depthFirstSearch(graph, i, i);
        if (returnvalue == true){
            return true;
        }
    }

    return false;
}