(function() {var implementors = {};
implementors["consensus"] = [{"text":"impl NewNetworkSender for ConsensusNetworkSender","synthetic":false,"types":[]}];
implementors["libra_mempool"] = [{"text":"impl NewNetworkSender for MempoolNetworkSender","synthetic":false,"types":[]}];
implementors["network"] = [];
implementors["network_builder"] = [{"text":"impl NewNetworkSender for DummyNetworkSender","synthetic":false,"types":[]}];
implementors["state_synchronizer"] = [{"text":"impl NewNetworkSender for StateSynchronizerSender","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()